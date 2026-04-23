import { Clock, MapPin, Languages, AlertTriangle } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Long waits for non-urgent eye complaints",
    body: "Patients wait days for an appointment when many issues could be safely resolved or prioritized in minutes.",
  },
  {
    icon: AlertTriangle,
    title: "Missed red-flag emergencies",
    body: "Sudden vision loss, retinal detachment and chemical injuries are routinely under-recognized at first contact.",
  },
  {
    icon: MapPin,
    title: "Specialist access is uneven",
    body: "Rural and underserved areas have a fraction of the ophthalmologists they need, while urban clinics are overloaded.",
  },
  {
    icon: Languages,
    title: "Care that doesn't speak your language",
    body: "Patients describe symptoms in their own words — most digital tools fail at multilingual, dialect-aware intake.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            The problem
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Eye care is too slow at the front door — and too risky at the edges.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Most ocular complaints don't need an emergency room, but a few
            absolutely do. Today there is no safe, scalable way to tell them
            apart in real time.
          </p>
        </div>

        <ul className="mt-16 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {pains.map((p) => (
            <li key={p.title} className="bg-card p-8 lg:p-10">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
