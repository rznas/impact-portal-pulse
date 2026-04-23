import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroIris from "@/assets/hero-iris.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Clinically-aligned AI · Safety-first decision tree
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Eye care guidance,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              triaged in minutes.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            OcuTriage is a conversational AI assistant that gathers symptoms,
            rules out emergencies first, and routes patients to the right level
            of care — with seamless appointment booking. Safe, multilingual, and
            built for accessibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95 transition"
            >
              Request a clinical demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              How it works
            </a>
          </motion.div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "<3 min", v: "Average triage" },
              { k: "5-phase", v: "Safety protocol" },
              { k: "WCAG 2.2", v: "AA accessible" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-semibold text-foreground">
                  {s.k}
                </dt>
                <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div
            className="relative aspect-square rounded-3xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img
              src={heroIris}
              alt="Macro photograph of a human iris representing AI vision analysis"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(140deg, transparent 40%, color-mix(in oklab, var(--primary) 30%, transparent))",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 max-w-[260px] rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
            <div className="flex items-start gap-3">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary shrink-0">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold">Red-flag protected</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Emergent conditions are screened before any further questions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
