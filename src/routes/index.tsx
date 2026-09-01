import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Globe } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Services } from "@/components/site/Services";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PhoenixMark } from "@/components/site/PhoenixMark";
import { Reveal } from "@/components/site/Reveal";
import { LeadGateProvider, GateLink } from "@/components/site/LeadGate";
import phoenixSymbolAsset from "@/assets/phoenix-symbol.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phoenix India — Insurance, Loans & Accounts in Kalyan" },
      {
        name: "description",
        content:
          "Phoenix India, Kalyan: Corporate Agent for insurance, Direct Sales Associate for loans, plus accounts, GST and tax filing. Serving Mumbai region clients since 2009.",
      },
      { property: "og:title", content: "Phoenix India — Insurance, Loans & Accounts in Kalyan" },
      {
        property: "og:description",
        content:
          "Insurance, loans and accounts under one roof in Kalyan (W), Maharashtra. Corporate Agent since 2009. Call 0251-6571888.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HERO_STATS = [
  { k: "2009", v: "Serving clients since" },
  { k: "₹50L+", v: "Monthly business volume" },
  { k: "No. 1", v: "Iffco-Tokio, Mumbai region" },
  { k: "7+ yrs", v: "Mumbai TaxiMan Union" },
];

const STRIP = [
  { k: "15+ yrs", v: "Trusted by corporates & retail clients" },
  { k: "3-in-1", v: "Insurance, Loan & Accounts under one office" },
  { k: "#1 Region", v: "Ranked No.1 in Mumbai with Iffco-Tokio GIC Ltd" },
  { k: "4 Banks", v: "Including Canara Bank and 3 co-operative banks as clients" },
];

const WHY = [
  {
    t: "Best cover, fair price",
    d: "We compare across insurers so you get the right cover at a genuinely competitive premium.",
  },
  {
    t: "Personal & business, both",
    d: "From a family's health cover to a fleet owner's motor policy.",
  },
  {
    t: "A full financial spread",
    d: "Insurance, loans and accounts filings under one roof.",
  },
  {
    t: "There at claim time",
    d: "Support from purchase through to settlement.",
  },
];

const CLIENTS = [
  "Asian Bulk Carriers",
  "Bhartiya Parivahan",
  "Anchor India Pvt Ltd",
  "Rukshmani Synthetics",
  "Canara Bank",
  "Bharat Co-operative Bank",
  "Nagrik Shakari Bank",
  "The Thane District Central Co-op Bank",
  "Numerous Motor Dealers",
];

const ADDRESS =
  "Office No. 008, Ground Floor, Harihar Nook CHS Ltd, Kalyan-Murbad Road, Opp. Roshan Petrol Pump, Kalyan (W) – 421301";

function EmberRule() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="ember-rule" />
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="bg-paper-2">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-32 md:pb-28 md:pt-40">
        <div
          aria-hidden
          data-animate
          className="pointer-events-none absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--flame) 38%, transparent), transparent 70%)",
            animation: "pulse-glow 7s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--teal-2) 55%, transparent), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-flame-2">
                Corporate Agent · Est. 2009 · Kalyan, Maharashtra
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] text-on-dark md:text-6xl">
                Insurance, loans &amp; accounts —{" "}
                <em className="text-gradient-flame not-italic md:italic">under one roof.</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted md:text-lg">
                Since 2009 we have worked with fleet owners, traders, co-operative banks and
                families across Kalyan and the Mumbai region. One office handles the policy, the
                loan file and the filings.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <GateLink href="#contact" className="btn-flame">
                  Talk to Phoenix India
                </GateLink>
                <GateLink href="#services" className="btn-ghost-light">
                  See what we cover
                </GateLink>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {HERO_STATS.map((s) => (
                  <div key={s.k}>
                    <dt className="font-mono text-xl text-flame-2">{s.k}</dt>
                    <dd className="mt-1 text-xs leading-snug text-on-dark-muted">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div data-animate style={{ animation: "flame-float 6s ease-in-out infinite" }}>
              <img
                src={phoenixSymbolAsset.url}
                alt="Phoenix India symbol"
                className="h-64 w-auto md:h-[22rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-teal py-12 text-on-dark">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {STRIP.map((s, i) => (
            <Reveal
              key={s.k}
              delay={i * 70}
              className={`lg:px-8 ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
            >
              <p className="font-mono text-2xl text-flame-2 md:text-3xl">{s.k}</p>
              <p className="mt-2 text-sm leading-snug text-on-dark-muted">{s.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Services />
      <EmberRule />

      {/* Why */}
      <section id="why" className="bg-ink py-20 text-on-dark md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="eyebrow text-flame-2">Why Phoenix India</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
              If you think every insurance office is the same, come talk to us.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-2/70 p-7 transition-colors hover:border-flame/50">
                  <span className="font-mono text-xs text-flame">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl">{w.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-2xl bg-teal p-8 text-on-dark md:p-10">
              <p className="eyebrow text-flame-2">Director</p>
              <h3 className="mt-3 font-display text-3xl">Jagannath K. Shinde</h3>
              <p className="mt-2 text-sm text-on-dark-muted">
                Over two decades in Insurance &amp; Management
              </p>
              <ul className="mt-7 space-y-3 text-sm text-on-dark-muted">
                {[
                  "Strategic planning & business development",
                  "Channel management, sales & marketing",
                  "Specialist in General, Motor & Accident Insurance",
                ].map((li) => (
                  <li key={li} className="flex gap-3 border-t border-white/10 pt-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flame-2" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-ember">About the Director</p>
            <div className="mt-4 space-y-5 text-base leading-relaxed text-ink/80">
              <p>
                Jagannath K. Shinde has a long record of building and retaining motivated sales
                teams — people who stay, learn the products properly and look after the client after
                the policy is issued.
              </p>
              <p>
                He has led sales operations across the Mumbai region since founding Phoenix India in
                2009, working with corporates, co-operative banks, motor dealers and retail
                families.
              </p>
              <p>
                Phoenix India has served the Mumbai TaxiMan Union for more than seven years, a
                relationship that continues today.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="overflow-hidden bg-ink py-20 text-on-dark md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="eyebrow text-flame-2">Clients</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Companies, banks and unions we work with
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                {CLIENTS.map((c) => (
                  <span
                    key={c}
                    className="whitespace-nowrap px-8 font-display text-2xl italic text-on-dark-muted md:text-3xl"
                  >
                    {c}
                    <span className="ml-8 text-flame">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="eyebrow text-ember">Contact</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-5xl">
              Give us a chance — we won't disappoint you.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" />
                  <div>
                    <p className="eyebrow text-ink/50">Office</p>
                    <p className="mt-1 text-ink/85">{ADDRESS}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-ember" />
                  <div>
                    <p className="eyebrow text-ink/50">Telephone</p>
                    <a href="tel:02516571888" className="mt-1 block font-mono text-ink/85">
                      0251-6571888
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Globe className="mt-1 h-5 w-5 shrink-0 text-ember" />
                  <div>
                    <p className="eyebrow text-ink/50">Website</p>
                    <p className="mt-1 font-mono text-ink/85">www.phoenixindia.co</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
                <iframe
                  title="Phoenix India office location on Google Maps"
                  src="https://www.google.com/maps?q=Harihar%20Nook%20CHS%20Ltd%2C%20Kalyan-Murbad%20Road%2C%20Kalyan%20West%20421301&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink pt-16 text-on-dark">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <PhoenixMark id="ftr" className="h-9 w-9" />
                <span className="font-display text-lg font-semibold">Phoenix India</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-dark-muted">
                Corporate Agent for Insurance, Direct Sales Associate for Loans, and accounts &amp;
                tax filings. Kalyan, Maharashtra — since 2009.
              </p>
            </div>
            {[
              { h: "Company", links: [["About", "#about"], ["Why Us", "#why"], ["Clients", "#clients"]] },
              {
                h: "Services",
                links: [["Insurance", "#services"], ["Loan", "#services"], ["Accounts & GST", "#services"]],
              },
              {
                h: "Reach us",
                links: [["0251-6571888", "tel:02516571888"], ["Enquiry form", "#contact"]],
              },
            ].map((col) => (
              <div key={col.h}>
                <p className="eyebrow text-flame-2">{col.h}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-on-dark-muted hover:text-flame-2">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="ember-rule mt-14" />
          <div className="flex flex-col gap-2 py-6 text-xs text-on-dark-muted md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Phoenix India. All rights reserved.</p>
            <p className="max-w-xl md:text-right">{ADDRESS}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
