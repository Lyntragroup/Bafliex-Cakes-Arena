import { useRouterState } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import {
  contactDestinationForPath,
  contactLabel,
  contactShortLabel,
} from "@/content/whatsapp";

/**
 * Global floating contact action.
 * Rendered once in the root route so it appears on every public page.
 *
 * The floating action opens the live LYNTRA WhatsApp conversation.
 * The destination and pre-filled message are centralized in src/content/whatsapp.ts.
 */
export function WhatsAppButton({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { href, external } = contactDestinationForPath(pathname);

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={contactLabel}
      title={contactLabel}
      className={cn(
        "group fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full",
        "bg-white p-3.5 text-slate-900 shadow-lg ring-1 ring-black/10",
        "transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "sm:bottom-6 sm:right-6 sm:pl-4 sm:pr-5",
        className,
      )}
    >
      <span
        className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-4.5 fill-current" role="img">
          <path d="M12 2.25a9.72 9.72 0 0 0-8.4 14.58L2.4 21.75l5.06-1.16A9.75 9.75 0 1 0 12 2.25Zm0 17.78a8 8 0 0 1-4.08-1.12l-.29-.17-3 .69.71-2.92-.19-.3A8 8 0 1 1 12 20.03Zm4.38-5.97c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01s.86 2.33.98 2.49c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </span>
      <span className="hidden text-sm font-semibold sm:inline">{contactShortLabel}</span>
      <span className="sr-only">{contactLabel}</span>
    </a>
  );
}
