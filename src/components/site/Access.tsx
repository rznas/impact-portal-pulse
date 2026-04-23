import { Globe2, Accessibility, Type, Volume2, Keyboard, Languages } from "lucide-react";

const a11y = [
  { icon: Accessibility, t: "WCAG 2.2 AA", d: "Color contrast, focus order and target sizes audited against AA criteria." },
  { icon: Keyboard, t: "Full keyboard control", d: "Every triage interaction can be completed without a mouse or touch." },
  { icon: Volume2, t: "Screen-reader friendly", d: "Semantic landmarks, ARIA live regions for streaming responses, and meaningful labels." },
  { icon: Type, t: "Readable typography", d: "Minimum 16px body, scalable to 200% without loss of content or functionality." },
];

const i18n = [
  { icon: Languages, t: "Multilingual NLP", d: "English, Persian (Farsi) and Arabic at launch — extensible to additional languages." },
  { icon: Globe2, t: "RTL-ready", d: "Bidirectional layouts, right-to-left text and locale-aware date and number formatting." },
];

export function Access() {
  return (
    <section
      id="access"
      className="py-24 lg:py-32 bg-secondary/40 border-y border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            Accessibility & globalization
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Care that meets every patient where they are.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Triage is only useful if every patient — regardless of language,
            ability, or device — can complete it confidently.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-display text-xl font-semibold">Accessibility</h3>
            <ul className="mt-6 space-y-5">
              {a11y.map((i) => (
                <li key={i.t} className="flex gap-4">
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <i.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium">{i.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{i.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-display text-xl font-semibold">Globalization</h3>
            <ul className="mt-6 space-y-5">
              {i18n.map((i) => (
                <li key={i.t} className="flex gap-4">
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-accent/30 text-foreground shrink-0">
                    <i.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium">{i.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{i.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { l: "English", d: "ltr" },
                { l: "فارسی", d: "rtl" },
                { l: "العربية", d: "rtl" },
              ].map((lang) => (
                <div
                  key={lang.l}
                  dir={lang.d}
                  className="rounded-xl border border-border bg-background py-4 font-display text-lg"
                >
                  {lang.l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
