import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { GateLink } from "@/components/site/LeadGate";


const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all ${
        scrolled
          ? "bg-ink/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)] border-b border-white/10"
          : "bg-ink/60 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <GateLink
              key={n.href}
              href={n.href}
              className="rounded-sm text-sm text-on-dark-muted transition-colors hover:text-flame-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame-2"
            >
              {n.label}
            </GateLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:02516571888"
            className="flex items-center gap-2 font-mono text-xs text-on-dark-muted hover:text-flame-2"
          >
            <Phone className="h-3.5 w-3.5" /> 0251-6571888
          </a>
          <GateLink href="#contact" className="btn-flame px-5 py-2 text-sm">
            Get a Quote
          </GateLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-on-dark md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <GateLink
                key={n.href}
                href={n.href}
                onNavigate={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-on-dark-muted hover:text-flame-2"
              >
                {n.label}
              </GateLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href="tel:02516571888" className="font-mono text-xs text-on-dark-muted">
              0251-6571888
            </a>
            <GateLink href="#contact" onNavigate={() => setOpen(false)} className="btn-flame">
              Get a Quote
            </GateLink>
          </div>
        </div>
      )}
    </header>
  );
}
