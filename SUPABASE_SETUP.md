# Supabase Setup

## 1. Create the Supabase project

Create a project at [supabase.com](https://supabase.com/) and keep its database password private.

## 2. Create tables and enable RLS

In the Supabase dashboard, open **SQL Editor**, paste the contents of `supabase-schema.sql`, and run it. The script creates the profile, donor, recipient, inventory, and match-history tables, a profile trigger for new accounts, and row-level security policies.

Members can read and manage only their own donor and recipient records and match history. Users with an administrator-approved `hospital` or `admin` profile can read donor and recipient records across accounts. All signed-in users can read inventory; only approved staff can manage inventory they own. Public sign-up always creates a `member` profile.

## 3. Add the browser credentials

In **Project Settings > API**, copy the Project URL and the publishable key (or legacy `anon` key). Put them in `supabase-config.js`. These values are meant to be used by the browser; never put a `service_role` or secret key in this project.

## 4. Configure email sign-in

In **Authentication > URL Configuration**, set the Site URL to your local development URL and add that URL to the Redirect URLs list. Keep email confirmation enabled for real accounts. Supabase's default email provider may require SMTP setup for reliable delivery beyond testing.

## 5. Run the site over HTTP

Open this folder with a local web server, such as VS Code Live Server. Do not open `index.html` as a `file://` URL. Use the local URL configured in Supabase, then create a member account from **Login > Create an account**.

## 6. Approve hospital/admin accounts

Create the account normally first. In SQL Editor, promote only a verified account using its email:

```sql
update public.profiles
set role = 'hospital'
where id = (
    select id from auth.users where email = 'verified-hospital@example.com'
);
```

Use `admin` instead of `hospital` only for trusted administrators. Profile roles cannot be changed through the browser client, so a user cannot grant themselves staff access.

## Important limitation

This is a learning prototype, not a clinical system. Do not enter real patient or donor information. Before any real-world use, the data model, staff verification, matching workflow, consent, audit logging, hosting, and applicable privacy/regulatory requirements need a professional security and clinical review.