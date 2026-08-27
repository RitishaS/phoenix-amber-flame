import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const TABS = {
  Insurance: [
    "Motor Insurance",
    "Health Insurance",
    "Factory Insurance",
    "Group Mediclaim",
    "Group Personal Accident",
    "Contractor All Risk",
    "Std Fire & Perils",
    "Director & Officer Liability Policy",
    "Workman Compensation",
    "Building & Home Insurance",
    "Plant & Machinery",
    "Electronic Equipment Insurance",
    "Hull Insurance",
    "Marine Insurance",
    "Professional Indemnity Insurance",
  ],
  Loan: [
    "Home Loan",
    "Mortgage Loan",
    "Personal/Business Loan",
    "Balance Transfer",
    "Top-Up Loan",
    "Project Loan",
    "Education Loan",
    "Construction Loan",
    "Vehicle Loan (New & Refinance)",
  ],
  Accounts: [
    "Shop Act License",
    "GST Registration & Filing",
    "Income Tax Return Filing",
    "Pvt Ltd/Ltd Company Registration",
    "VAT Return/Sales Tax/CST",
    "Trade Mark Registration/Patent",
    "Service Tax",
    "Professional Tax",
  ],
} as const;

type TabKey = keyof typeof TABS;

export function Services() {
  const [tab, setTab] = useState<TabKey>("Insurance");

  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow text-ember">What we handle</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight text-ink md:text-5xl">
            Three desks. One office. Every document handled properly.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Service categories"
            className="mt-9 inline-flex flex-wrap gap-1 rounded-full border border-ink/10 bg-paper-2 p-1"
          >
            {(Object.keys(TABS) as TabKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  tab === key
                    ? "bg-ink text-on-dark"
                    : "text-ink/60 hover:text-ember"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {TABS[tab].map((item, i) => (
            <Reveal key={item} delay={Math.min(i * 35, 300)}>
              <div className="flex items-start gap-3 border-b border-ink/10 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember/10">
                  <Check className="h-3 w-3 text-ember" />
                </span>
                <span className="text-[0.95rem] text-ink/85">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
