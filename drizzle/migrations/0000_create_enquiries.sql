CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text,
  phone text NOT NULL,
  email text,
  service_type text NOT NULL,
  message text,
  source text
);

GRANT INSERT ON public.enquiries TO anon;
GRANT INSERT, SELECT ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.enquiries FOR INSERT TO anon, authenticated
  WITH CHECK (true);
