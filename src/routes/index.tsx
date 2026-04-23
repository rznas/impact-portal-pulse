import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Technology } from "@/components/site/Technology";
import { Access } from "@/components/site/Access";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <Technology />
        <Access />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
