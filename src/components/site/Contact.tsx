import { Mail, Phone, MapPin, Twitter, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
            Contact us
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Talk to the team building safer eye care.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Clinicians, partners and investors — we'd love to hear from you.
            Reach out and we'll respond within one business day.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <a href="mailto:{{EMAIL}}" className="font-medium hover:text-primary transition">
                  {/* TODO: fill in */}
                  hello@yourdomain.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <a href="tel:{{PHONE}}" className="font-medium hover:text-primary transition">
                  {/* TODO: fill in */}
                  +__ ___ ___ ____
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Office</p>
                <p className="font-medium">
                  {/* TODO: fill in */}
                  Your address here
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex items-center gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="grid place-items-center h-10 w-10 rounded-lg border border-border hover:bg-muted transition"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="grid place-items-center h-10 w-10 rounded-lg border border-border hover:bg-muted transition"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        <form
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-[var(--shadow-soft)]"
          aria-labelledby="contact-form-title"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 id="contact-form-title" className="font-display text-xl font-semibold">
            Send us a message
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            All fields required. We'll never share your details.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Field label="Full name" id="name" type="text" autoComplete="name" />
            <Field label="Email" id="email" type="email" autoComplete="email" />
            <Field label="Organization" id="org" type="text" autoComplete="organization" />
            <Field label="Role" id="role" type="text" autoComplete="organization-title" />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
            />
          </div>

          <div className="mt-6 flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-input accent-[var(--primary)]"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I agree to the privacy policy and consent to being contacted about
              OcuTriage.
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  autoComplete,
}: {
  label: string;
  id: string;
  type: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
