create table if not exists public.inventory_history (
    id uuid primary key default gen_random_uuid(),
    inventory_id uuid,
    organ text not null,
    blood_group text not null,
    hospital_name text not null,
    action text not null check (action in ('Added', 'Status changed', 'Removed')),
    old_status text,
    new_status text,
    changed_by uuid references auth.users (id) on delete set null,
    changed_at timestamptz not null default now()
);

alter table public.inventory_history enable row level security;
grant select on public.inventory_history to authenticated;

drop policy if exists "Signed-in users read inventory history"
    on public.inventory_history;
create policy "Signed-in users read inventory history"
    on public.inventory_history for select to authenticated
    using (true);

create or replace function public.log_inventory_history()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    if tg_op = 'INSERT' then
        insert into public.inventory_history (
            inventory_id, organ, blood_group, hospital_name,
            action, old_status, new_status, changed_by
        ) values (
            new.id, new.organ, new.blood_group, new.hospital_name,
            'Added', null, new.status, auth.uid()
        );
        return new;
    end if;

    if tg_op = 'DELETE' then
        insert into public.inventory_history (
            inventory_id, organ, blood_group, hospital_name,
            action, old_status, new_status, changed_by
        ) values (
            old.id, old.organ, old.blood_group, old.hospital_name,
            'Removed', old.status, null, auth.uid()
        );
        return old;
    end if;

    if old.status is distinct from new.status then
        insert into public.inventory_history (
            inventory_id, organ, blood_group, hospital_name,
            action, old_status, new_status, changed_by
        ) values (
            new.id, new.organ, new.blood_group, new.hospital_name,
            'Status changed', old.status, new.status, auth.uid()
        );
    end if;

    return new;
end;
$$;

drop trigger if exists inventory_history_after_write on public.inventory;
create trigger inventory_history_after_write
    after insert or update of status or delete on public.inventory
    for each row execute function public.log_inventory_history();