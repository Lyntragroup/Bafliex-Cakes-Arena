import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { company } from "@/content/site";
import logoSrc from "@/assets/lyntra-logo.jpg";

/**
 * Official LYNTRA logo lockup — the supplied brand artwork
 * (circular mark + LYNTRA wordmark + "MOVE LIFE SMARTER." tagline),
 * centered in a square frame with a dark navy background.
 *
 * The artwork itself is never modified. We simply clip the square
 * image into a circle (1:1 display area, overflow hidden) so the
 * complete circular official logo shows cleanly in the header,
 * mobile menu and footer — no stretching, cropping or distortion.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${company.brand} — ${company.tagline} — home`}
      className={cn("inline-flex items-center", className)}
      data-tone={tone}
    >
      <span className="relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-background md:h-12 md:w-12">
        <img
          src={logoSrc}
          alt={`${company.brand} — ${company.tagline}`}
          width={512}
          height={512}
          className="h-full w-full object-contain"
        />
      </span>
    </Link>
  );
}
