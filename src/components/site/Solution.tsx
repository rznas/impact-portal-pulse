const phases = [
  {
    n: "01",
    t: "Consent & intake",
    d: "Clear medical disclaimer, privacy policy, and structured demographics before any clinical question is asked.",
  },
  {
    n: "02",
    t: "Standardized complaint",
    d: "NLP parses free-text symptoms and clarifies them into a clinically standardized chief complaint.",
  },
  {
    n: "03",
    t: "Safety-first triage",
    d: "Emergent → urgent → non-urgent. Red-flag triggers immediately route patients to emergency care.",
  },
  {
    n: "04",
    t: "Virtual exam",
    d: "Guided self-tests when safe — never asking patients to touch an injured or painful eye.",
  },
  {
    n: "05",
    t: "Action plan + booking",
    d: "Plain-language summary, home-care advice, and seamless appointment booking via Paziresh24 / Nobat.",
  },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="py-24 lg:py-32 bg-secondary/40 border-y border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            The solution
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            A 5-phase, safety-first triage protocol — designed with clinicians.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            OcuTriage rules out the dangerous before narrowing the routine. Each
            phase is explainable, auditable, and grounded in a curated medical
            knowledge graph.
          </p>
        </div>

        <ol className="mt-16 grid lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {phases.map((p) => (
            <li key={p.n} className="bg-card p-7 flex flex-col">
              <span className="font-mono text-xs text-primary">{p.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                {p.t}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
