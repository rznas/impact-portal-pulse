import { Eye } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span
            className="grid place-items-center h-8 w-8 rounded-md text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden="true"
          >
            <Eye className="h-4 w-4" />
          </span>
          <span className="font-display font-semibold">OcuTriage</span>
        </div>

        <p className="text-xs text-muted-foreground max-w-md">
          OcuTriage is informational and triage-oriented. It is not a substitute
          for professional medical diagnosis or treatment. In an emergency, call
          your local emergency number immediately.
        </p>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} OcuTriage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
