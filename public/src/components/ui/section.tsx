import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "muted" && "bg-surface",
        tone === "ink" && "surface-ink",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  tone = "default",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "default" | "ink";
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "ink" ? "text-accent" : "text-primary")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold md:text-4xl",
          tone === "ink" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
