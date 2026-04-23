import { Database, Workflow, MessageSquare, CalendarCheck, Network, Lock } from "lucide-react";

const stack = [
  {
    icon: MessageSquare,
    name: "Chainlit",
    role: "Conversational UI",
    desc: "Real-time chat surface with streaming, lifecycle hooks, and clinician observability of every prompt and tool call.",
  },
  {
    icon: Workflow,
    name: "LangGraph",
    role: "State machine",
    desc: "Explicit StateGraph orchestrates the 5 phases with checkpointed persistence across multi-turn sessions.",
  },
  {
    icon: Network,
    name: "GraphRAG · Neo4j",
    role: "Clinical knowledge",
    desc: "A curated medical knowledge graph powering differential diagnoses, urgency tags, and virtual exam steps.",
  },
  {
    icon: CalendarCheck,
    name: "Paziresh24 · Nobat",
    role: "Appointment booking",
    desc: "Direct integration into the patient journey — surfacing same-day and specialist availability.",
  },
  {
    icon: Database,
    name: "Literal AI",
    role: "Observability",
    desc: "Every triage session is traceable end-to-end for clinical QA, auditing, and continuous improvement.",
  },
  {
    icon: Lock,
    name: "Privacy by design",
    role: "Compliance posture",
    desc: "Encrypted at rest and in transit, configurable retention, and consent captured before any clinical question.",
  },
];

export function Technology() {
  return (
    <section id="technology" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              The technology
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Built on an explainable, modern AI stack.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground">
            Every component is chosen so clinicians, regulators and engineers
            can reason about exactly how a recommendation was made.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((s) => (
            <article
              key={s.name}
              className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{s.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{s.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
