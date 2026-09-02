import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitEnquiry } from "@/lib/enquiries.functions";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", mobile: "", need: "", message: "" });

  const set = (k: keyof typeof values, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!values["name"].trim()) next["name"] = "Please enter your name.";
    if (!/^[0-9+\s-]{10,15}$/.test(values["mobile"].trim()))
      next["mobile"] = "Please enter a valid mobile number.";
    if (!values["need"]) next["need"] = "Please choose what you need.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const { error } = await supabase.from("enquiries").insert({
      name: values["name"].trim(),
      phone: values["mobile"].trim(),
      service_type: values["need"],
      message: values["message"].trim() || null,
      source: "contact-section",
    });
    if (error) {
      setErrors({ form: "Could not send right now. Please call 0251-6571888." });
      return;
    }
    setSent(true);
  };

  const field =
    "w-full rounded-lg border border-ink/15 bg-paper-2 px-4 py-3 text-ink placeholder:text-ink/40";

  return (
    <div className="rounded-2xl border border-ink/10 bg-paper-2 p-6 shadow-[var(--shadow-card)] md:p-8">
      <h3 className="font-display text-2xl text-ink">Send an enquiry</h3>
      <form onSubmit={onSubmit} noValidate className="mt-5 space-y-4">
        <div>
          <label htmlFor="name" className="eyebrow text-ink/60">
            Full name
          </label>
          <input
            id="name"
            className={`${field} mt-2`}
            value={values["name"]}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
          />
          {errors["name"] && <p className="mt-1 text-sm text-ember">{errors["name"]}</p>}
        </div>
        <div>
          <label htmlFor="mobile" className="eyebrow text-ink/60">
            Mobile number
          </label>
          <input
            id="mobile"
            inputMode="tel"
            className={`${field} mt-2`}
            value={values["mobile"]}
            onChange={(e) => set("mobile", e.target.value)}
            placeholder="10-digit mobile number"
          />
          {errors["mobile"] && <p className="mt-1 text-sm text-ember">{errors["mobile"]}</p>}
        </div>
        <div>
          <label htmlFor="need" className="eyebrow text-ink/60">
            What do you need?
          </label>
          <select
            id="need"
            className={`${field} mt-2`}
            value={values["need"]}
            onChange={(e) => set("need", e.target.value)}
          >
            <option value="">Select an option</option>
            <option>Insurance</option>
            <option>Loan</option>
            <option>Accounts, GST &amp; Registration</option>
            <option>Not sure yet</option>
          </select>
          {errors["need"] && <p className="mt-1 text-sm text-ember">{errors["need"]}</p>}
        </div>
        <div>
          <label htmlFor="message" className="eyebrow text-ink/60">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className={`${field} mt-2`}
            value={values["message"]}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Tell us briefly what you're looking for."
          />
        </div>

        <button type="submit" className="btn-flame w-full">
          Send Enquiry
        </button>

        {sent && (
          <p
            role="status"
            className="rounded-lg border border-ember/25 bg-ember/10 px-4 py-3 text-sm text-ember"
          >
            Thank you — your enquiry has been noted. Please call 0251-6571888 for an immediate
            response.
          </p>
        )}

        {errors["form"] && (
          <p role="alert" className="text-sm text-ember">
            {errors["form"]}
          </p>
        )}

        <p className="font-mono text-[0.7rem] leading-relaxed text-ink/50">
          Note: enquiries are stored securely — email or WhatsApp forwarding can be connected later.
        </p>
      </form>
    </div>
  );
}
