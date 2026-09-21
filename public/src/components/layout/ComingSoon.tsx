import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

/**
 * Placeholder shell for routes that are part of the site architecture but whose
 * full content is built in a later phase.
 */
export function ComingSoon({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-page py-24 md:py-32">
          <p className="eyebrow text-primary">LYNTRA</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <Link to="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:info@lyntra.co.ke">Contact LYNTRA</a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
