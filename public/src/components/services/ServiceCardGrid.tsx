import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Icon } from "@/components/home/Icon";
import { cn } from "@/lib/utils";
import type { Cta } from "@/content/site";

export type ServiceGridItem = {
  slug: string;
  title: string;
  text: string;
  icon: string;
  cta?: Cta;
};

/** Generic responsive card grid used across LYNTRA service pages. */
export function ServiceCardGrid({
  items,
  columns = 4,
  className,
}: {
  items: ServiceGridItem[];
  columns?: 3 | 4;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-5 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.slug}>
          <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
              <Icon name={item.icon} className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            {item.cta ? (
              <Link
                to={item.cta.to}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
              >
                {item.cta.label}
                <ArrowUpRight aria-hidden className="size-4" />
                <span className="sr-only"> — {item.title}</span>
              </Link>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}
