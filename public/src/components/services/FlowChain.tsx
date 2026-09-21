import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type FlowNode = { label: string; tone?: "default" | "primary" | "ink" };

/**
 * Simple vertical (stacked) flow diagram used to explain cargo workflows such
 * as multi-stop trips and backhaul return journeys. Purely illustrative.
 */
export function FlowChain({
  nodes,
  className,
  tone = "default",
}: {
  nodes: FlowNode[];
  className?: string;
  tone?: "default" | "ink";
}) {
  return (
    <ol className={cn("mx-auto flex max-w-md flex-col items-stretch", className)}>
      {nodes.map((node, index) => (
        <li key={`${node.label}-${index}`} className="flex flex-col items-center">
          <div
            className={cn(
              "w-full rounded-xl border px-5 py-3.5 text-center text-sm font-medium shadow-soft transition-colors duration-200",
              tone === "ink"
                ? "border-ink-foreground/12 bg-ink-foreground/5 text-ink-foreground hover:border-accent/40"
                : "border-border bg-card hover:border-primary/40",
              node.tone === "primary" &&
                (tone === "ink"
                  ? "border-accent/40 bg-accent/15 text-ink-foreground"
                  : "border-primary/40 bg-brand-soft text-primary"),
            )}
          >
            {node.label}
          </div>
          {index < nodes.length - 1 ? (
            <ChevronDown
              aria-hidden
              className={cn("my-1.5 size-5", tone === "ink" ? "text-accent" : "text-primary")}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
