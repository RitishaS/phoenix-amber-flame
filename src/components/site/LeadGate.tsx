import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Target = { destination: string; source: string };

// Module-level store so consumers never depend on React context identity
// (avoids "must be used inside provider" crashes across HMR / duplicate modules).
let listener: ((t: Target | null) => void) | null = null;
let providerMounted = false;

function openGate(destination: string, source: string) {
  if (listener) listener({ destination, source });
  else if (destination.startsWith("#")) {
    document.querySelector(destination)?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.href = destination;
  }
}

export function useLeadGate() {
  return { open: openGate };
}

const SERVICES = ["Insurance", "Loan", "Account/Banking", "Not sure yet"];

export function LeadGateProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<Target | null>(null);

  useEffect(() => {
    listener = setTarget;
    providerMounted = true;
    return () => {
      listener = null;
      providerMounted = false;
    };
  }, []);

  const close = useCallback(() => setTarget(null), []);


  const go = useCallback(
    (destination: string) => {
      setTarget(null);
      if (destination.startsWith("#")) {
        const el = document.querySelector(destination);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.location.href = destination;
    },
    []
  );

  useEffect(() => {
    if (!target) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [target, close]);

  return (
    <>
      {children}
      {target && (
        <LeadGateModal
          source={target.source}
          onClose={close}
          onDone={() => go(target.destination)}
        />
      )}
    </>
  );

}

function LeadGateModal({
  source,
  onClose,
  onDone,
}: {
  source: string;
  onClose: () => void;
  onDone: () => void;
}) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof values, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const field =
    "w-full rounded-lg border border-ink/15 bg-paper-2 px-4 py-2.5 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-flame/60";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next["name"] = "Please enter your name.";
    if (!/^[0-9+\s-]{10,15}$/.test(values.phone.trim()))
      next["phone"] = "Please enter a valid phone number.";
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next["email"] = "Please enter a valid email address.";
    if (!values.service) next["service"] = "Please choose a service type.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSaving(true);
    const { error } = await supabase.from("enquiries").insert({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim() || null,
      service_type: values.service,
      message: values.message.trim() || null,
      source,
    });
    setSaving(false);
    if (error) {
      setErrors({ form: "Could not send right now. Please try again or call 0251-6571888." });
      return;
    }
    setDone(true);
    setTimeout(onDone, 900);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry before continuing"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ink/10 bg-paper-2 p-6 shadow-[var(--shadow-card)] sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1.5 text-ink/60 hover:text-ink focus:outline-none focus:ring-2 focus:ring-flame/60"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="eyebrow text-ember">Quick details</p>
        <h3 className="mt-2 font-display text-2xl text-ink">Tell us how to reach you</h3>
        <p className="mt-2 text-sm text-ink/60">
          Share a few details and we&apos;ll take you straight through.
        </p>

        <form onSubmit={onSubmit} noValidate className="mt-5 space-y-4">
          <div>
            <label htmlFor="gate-name" className="eyebrow text-ink/60">
              Name
            </label>
            <input
              id="gate-name"
              className={`${field} mt-2`}
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Your name"
            />
            {errors["name"] && <p className="mt-1 text-sm text-ember">{errors["name"]}</p>}
          </div>

          <div>
            <label htmlFor="gate-phone" className="eyebrow text-ink/60">
              Phone number *
            </label>
            <input
              id="gate-phone"
              inputMode="tel"
              className={`${field} mt-2`}
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="10-digit mobile number"
            />
            {errors["phone"] && <p className="mt-1 text-sm text-ember">{errors["phone"]}</p>}
          </div>

          <div>
            <label htmlFor="gate-email" className="eyebrow text-ink/60">
              Email (optional)
            </label>
            <input
              id="gate-email"
              type="email"
              className={`${field} mt-2`}
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="you@example.com"
            />
            {errors["email"] && <p className="mt-1 text-sm text-ember">{errors["email"]}</p>}
          </div>

          <div>
            <label htmlFor="gate-service" className="eyebrow text-ink/60">
              Service type *
            </label>
            <select
              id="gate-service"
              className={`${field} mt-2`}
              value={values.service}
              onChange={(e) => set("service", e.target.value)}
            >
              <option value="">Select an option</option>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            {errors["service"] && <p className="mt-1 text-sm text-ember">{errors["service"]}</p>}
          </div>

          <div>
            <label htmlFor="gate-message" className="eyebrow text-ink/60">
              Message / requirement (optional)
            </label>
            <textarea
              id="gate-message"
              rows={3}
              className={`${field} mt-2`}
              value={values.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Tell us briefly what you're looking for."
            />
          </div>

          {errors["form"] && (
            <p role="alert" className="text-sm text-ember">
              {errors["form"]}
            </p>
          )}

          <button type="submit" disabled={saving || done} className="btn-flame w-full">
            {done ? "Thank you — continuing…" : saving ? "Sending…" : "Submit & continue"}
          </button>
        </form>
      </div>
    </div>
  );
}

export function GateLink({
  href,
  className,
  children,
  onNavigate,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  const { open } = useLeadGate();
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.();
        open(href, href);
      }}
    >
      {children}
    </a>
  );
}
