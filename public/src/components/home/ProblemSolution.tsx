import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Icon } from "@/components/home/Icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { audienceSolutions } from "@/content/site";

export function ProblemSolution() {
  return (
    <Section id="problem-solution" tone="muted">
      <SectionHeading
        eyebrow="Problems we solve"
        title="Whatever you need to move, we make it easier"
        text="Transport should not be a daily struggle. Here is what people tell us, and what LYNTRA does about it."
      />

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {audienceSolutions.map((item) => (
          <li key={item.slug}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

              <p className="mt-4 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground italic">
                “{item.problem}”
              </p>

              <p className="mt-4 text-sm leading-relaxed">{item.solution}</p>

              <ul className="mt-5 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={item.cta.to}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                {item.cta.label}
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
