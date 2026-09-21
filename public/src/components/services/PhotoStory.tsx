import { cn } from "@/lib/utils";

export type StoryPhoto = {
  src: string;
  alt: string;
  label: string;
  caption?: string;
};

/**
 * Realistic photography strip used on the LYNTRA service pages.
 * `numbered` renders the items as a journey (1 → 2 → 3 …).
 */
export function PhotoStory({
  items,
  numbered = false,
  columns = 3,
  tone = "default",
  className,
}: {
  items: StoryPhoto[];
  numbered?: boolean;
  columns?: 2 | 3 | 4;
  tone?: "default" | "ink";
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "mt-12 grid gap-5",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={item.label}>
          <figure
            className={cn(
              "group flex h-full flex-col overflow-hidden rounded-2xl border shadow-soft transition-transform duration-300 hover:-translate-y-1",
              tone === "ink"
                ? "border-ink-border bg-[color-mix(in_oklab,var(--ink)_65%,transparent)]"
                : "border-border bg-card",
            )}
          >
            <div className="relative overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,color-mix(in_oklab,var(--ink)_82%,transparent)_100%)]"
              />
              {numbered ? (
                <span className="absolute top-3 left-3 grid size-8 place-items-center rounded-full bg-accent text-sm font-bold text-ink">
                  {index + 1}
                </span>
              ) : null}
            </div>
            <figcaption className="flex flex-1 flex-col p-5">
              <span
                className={cn(
                  "text-base font-semibold",
                  tone === "ink" ? "text-ink-foreground" : "text-foreground",
                )}
              >
                {item.label}
              </span>
              {item.caption ? (
                <span
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
                  )}
                >
                  {item.caption}
                </span>
              ) : null}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

/** Full-width cinematic image band with a short overlaid statement. */
export function PhotoBand({
  src,
  alt,
  eyebrow,
  title,
  text,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="surface-ink relative isolate overflow-hidden">
      <img
        src={src}
        alt={alt}
        width={1400}
        height={900}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--ink)_18%,color-mix(in_oklab,var(--ink)_55%,transparent)_100%)]"
      />
      <div className="container-page py-24 md:py-32">
        <div className="max-w-2xl">
          {eyebrow ? <p className="eyebrow text-accent">{eyebrow}</p> : null}
          <h2 className="mt-3 text-3xl font-bold text-ink-foreground md:text-4xl">{title}</h2>
          {text ? (
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">{text}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
