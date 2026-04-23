import { useState } from "react";
import { Eye, Menu, X } from "lucide-react";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#technology", label: "Technology" },
  { href: "#access", label: "Accessibility" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60"
      role="banner"
    >
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between"
      >
        <a href="#top" className="flex items-center gap-2 group" aria-label="iCheck home">
          <span
            className="grid place-items-center h-9 w-9 rounded-lg text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden="true"
          >
            <Eye className="h-5 w-5" />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">
            iCheck
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Request a demo
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Request a demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
