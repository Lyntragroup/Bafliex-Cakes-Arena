import { Icon } from "@/components/home/Icon";

export type ProcessStep = { step: string; title: string; text: string; icon?: string };

/** Four-step process strip shared by LYNTRA service pages. */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.step} className="bg-card p-7 transition-colors duration-200 hover:bg-surface">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest text-primary">
              {step.step}
            </span>
            {step.icon ? <Icon name={step.icon} className="size-4 text-primary" /> : null}
          </div>
          <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
