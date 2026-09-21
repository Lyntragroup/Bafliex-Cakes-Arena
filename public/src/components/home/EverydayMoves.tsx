import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/section";
import { appDestinations } from "@/content/app-links";
import { everydayMoves } from "@/content/site";

/** "For You" — everyday Kenyan situations LYNTRA helps with. */
export function EverydayMoves() {
  return (
    <Section id="for-you">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow={everydayMoves.eyebrow}
          title={everydayMoves.title}
          text={everydayMoves.text}
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {everydayMoves.examples.map((example) => (
            <li
              key={example}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium shadow-soft"
            >
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
              {example}
            </li>
          ))}
          <li className="flex items-center sm:col-span-2">
            <Link
              to={appDestinations.customerApp.to}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              {appDestinations.customerApp.label}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}
