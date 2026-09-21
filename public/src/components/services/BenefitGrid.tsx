import { Icon } from "@/components/home/Icon";

export type Benefit = { title: string; text: string; icon: string };

/** Six-up advantage grid shared by LYNTRA service pages. */
export function BenefitGrid({ items }: { items: Benefit[] }) {
  return (
    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
        >
          <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
            <Icon name={item.icon} className="size-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
