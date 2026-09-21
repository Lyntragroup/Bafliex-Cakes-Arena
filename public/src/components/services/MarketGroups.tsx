import { MapPin } from "lucide-react";

export type MarketGroupItem = { key: string; label: string; note: string; towns: string[] };

/** Reusable priority / expansion market listing. Add towns in the content file. */
export function MarketGroups({ groups }: { groups: MarketGroupItem[] }) {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-2">
      {groups.map((group) => (
        <article
          key={group.key}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          <h3 className="text-xl font-semibold">{group.label}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{group.note}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {group.towns.map((town) => (
              <li
                key={town}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 hover:border-primary/40 hover:text-primary"
              >
                <MapPin aria-hidden className="size-3.5 text-primary" />
                {town}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
