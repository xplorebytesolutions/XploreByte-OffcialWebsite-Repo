create table if not exists lead_submissions (
  id bigserial primary key,
  kind text not null,
  status text not null default 'new',
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  company text,
  industry text,
  message text,
  preferred_date date,
  preferred_time text,
  source_path text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  user_agent text,
  ip_hash text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists lead_submissions_created_at_idx on lead_submissions (created_at desc);
create index if not exists lead_submissions_status_created_at_idx on lead_submissions (status, created_at desc);
create index if not exists lead_submissions_email_idx on lead_submissions (email);

