create extension if not exists pgcrypto;

create table public.profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    display_name text not null default '',
    role text not null default 'member'
        check (role in ('member', 'hospital', 'admin')),
    created_at timestamptz not null default now()
);

create table public.donors (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users (id) on delete cascade,
    name text not null,
    age integer not null check (age between 18 and 120),
    blood_group text not null
        check (blood_group in ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    organ text not null
        check (organ in ('Kidney', 'Liver', 'Heart', 'Lungs', 'Pancreas', 'Cornea')),
    city text not null,
    phone text not null,
    consent boolean not null check (consent),
    created_at timestamptz not null default now()
);

create table public.recipients (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users (id) on delete cascade,
    name text not null,
    age integer not null check (age between 1 and 120),
    blood_group text not null
        check (blood_group in ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    organ text not null
        check (organ in ('Kidney', 'Liver', 'Heart', 'Lungs', 'Pancreas', 'Cornea')),
    urgency text not null check (urgency in ('Low', 'Medium', 'High', 'Critical')),
    hospital text not null,
    phone text not null,
    status text not null default 'AI Match Pending',
    created_at timestamptz not null default now()
);

create table public.inventory (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users (id) on delete cascade,
    organ text not null,
    blood_group text not null
        check (blood_group in ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    hospital_name text not null,
    status text not null default 'Available'
        check (status in ('Available', 'Reserved', 'Transplanted', 'Unavailable')),
    updated_at timestamptz not null default now(),
    created_at timestamptz not null default now()
);

create table public.match_history (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users (id) on delete cascade,
    organ text not null,
    blood_group text not null
        check (blood_group in ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    urgency text not null check (urgency in ('Low', 'Medium', 'High', 'Critical')),
    match_count integer not null check (match_count >= 0),
    created_at timestamptz not null default now()
);

create or replace function public.handle_new_lifelink_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    insert into public.profiles (id, display_name)
    values (
        new.id,
        coalesce(new.raw_user_meta_data ->> 'display_name', '')
    );
    return new;
end;
$$;

create trigger on_lifelink_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_lifelink_user();

create or replace function public.current_lifelink_role()
returns text
language sql
stable
security definer
set search_path = ''
as $$
    select role from public.profiles where id = (select auth.uid());
$$;

revoke all on function public.current_lifelink_role() from public;
grant execute on function public.current_lifelink_role() to authenticated;

alter table public.profiles enable row level security;
alter table public.donors enable row level security;
alter table public.recipients enable row level security;
alter table public.inventory enable row level security;
alter table public.match_history enable row level security;

grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.donors to authenticated;
grant select, insert, update, delete on public.recipients to authenticated;
grant select, insert, update, delete on public.inventory to authenticated;
grant select, insert on public.match_history to authenticated;

create policy "Users read their own profile"
    on public.profiles for select to authenticated
    using (id = (select auth.uid()));

create policy "Owners and approved staff read donor records"
    on public.donors for select to authenticated
    using (
        owner_id = (select auth.uid())
        or (select public.current_lifelink_role()) in ('hospital', 'admin')
    );

create policy "Users create their own donor records"
    on public.donors for insert to authenticated
    with check (owner_id = (select auth.uid()));

create policy "Users update their own donor records"
    on public.donors for update to authenticated
    using (owner_id = (select auth.uid()))
    with check (owner_id = (select auth.uid()));

create policy "Users delete their own donor records"
    on public.donors for delete to authenticated
    using (owner_id = (select auth.uid()));

create policy "Owners and approved staff read recipient records"
    on public.recipients for select to authenticated
    using (
        owner_id = (select auth.uid())
        or (select public.current_lifelink_role()) in ('hospital', 'admin')
    );

create policy "Users create their own recipient records"
    on public.recipients for insert to authenticated
    with check (owner_id = (select auth.uid()));

create policy "Users update their own recipient records"
    on public.recipients for update to authenticated
    using (owner_id = (select auth.uid()))
    with check (owner_id = (select auth.uid()));

create policy "Users delete their own recipient records"
    on public.recipients for delete to authenticated
    using (owner_id = (select auth.uid()));

create policy "Signed-in users read inventory"
    on public.inventory for select to authenticated
    using (true);

create policy "Approved staff manage their inventory"
    on public.inventory for insert to authenticated
    with check (
        owner_id = (select auth.uid())
        and (select public.current_lifelink_role()) in ('hospital', 'admin')
    );

create policy "Approved staff update their inventory"
    on public.inventory for update to authenticated
    using (
        owner_id = (select auth.uid())
        and (select public.current_lifelink_role()) in ('hospital', 'admin')
    )
    with check (
        owner_id = (select auth.uid())
        and (select public.current_lifelink_role()) in ('hospital', 'admin')
    );

create policy "Approved staff delete their inventory"
    on public.inventory for delete to authenticated
    using (
        owner_id = (select auth.uid())
        and (select public.current_lifelink_role()) in ('hospital', 'admin')
    );

create policy "Users read their own match history"
    on public.match_history for select to authenticated
    using (owner_id = (select auth.uid()));

create policy "Users create their own match history"
    on public.match_history for insert to authenticated
    with check (owner_id = (select auth.uid()));