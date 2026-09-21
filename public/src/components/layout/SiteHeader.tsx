import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { mobileNav, primaryNav, safetySupport } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* Lock background scroll, trap focus and support Escape while the drawer is open. */
  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const items = [triggerRef.current, ...focusables()].filter(Boolean) as HTMLElement[];
      if (items.length === 0) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && (active === first || !items.includes(active as HTMLElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {primaryNav.map((item) => (
            <div key={item.label} className="group relative shrink-0">
              <Link
                to={item.to}
                activeProps={{ className: "text-primary" }}
                className="inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium whitespace-nowrap xl:px-3 text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.children ? (
                  <ChevronDown aria-hidden className="size-3.5 opacity-60" />
                ) : null}
              </Link>

              {item.children ? (
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="mt-2 rounded-xl border border-border bg-popover p-2 shadow-lift">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          className="block rounded-lg px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
                        >
                          <span className="font-medium">{child.label}</span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="lg" className="hidden xl:inline-flex">
            <Link to="/partners">Become a Partner</Link>
          </Button>
          <Button asChild variant="brand" size="lg">
            <Link to="/for-you">Get Started</Link>
          </Button>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => (open ? closeMenu() : setOpen(true))}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        hidden={!open}
        className={cn(
          "overflow-hidden border-t border-border bg-background lg:hidden",
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
          <Link
            to={mobileNav.home.to}
            onClick={closeMenu}
            className="flex min-h-11 items-center rounded-lg px-2 py-2.5 text-base font-semibold text-foreground"
          >
            {mobileNav.home.label}
          </Link>

          <Link
            to={mobileNav.about.to}
            onClick={closeMenu}
            className="flex min-h-11 items-center rounded-lg px-2 py-2.5 text-base font-semibold text-foreground"
          >
            {mobileNav.about.label}
          </Link>

          <div className="py-1">
            <Link
              to={mobileNav.servicesTo}
              onClick={closeMenu}
              className="eyebrow flex min-h-11 items-center px-2 py-2 text-primary"
            >
              {mobileNav.servicesTitle}
            </Link>
            <ul className="ml-2 border-l border-border pl-3">
              {mobileNav.services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center rounded-md px-2 py-2 text-base font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {mobileNav.topLevel.map((item) => (
            <div key={item.label}>
              <Link
                to={item.to}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-lg px-2 py-2.5 text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
              {item.label === "Safety & Support" ? (
                <ul className="ml-2 border-l border-border pl-3">
                  {safetySupport.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        to={sub.to}
                        onClick={closeMenu}
                        className="flex min-h-11 items-center rounded-md px-2 py-2 text-base text-muted-foreground"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <div className="mt-3 flex flex-col gap-2 pb-4">
            <Button asChild variant="brand" size="lg" onClick={closeMenu}>
              <Link to="/for-you">Get Started</Link>
            </Button>
            <Link
              to={mobileNav.contact.to}
              onClick={closeMenu}
              className="flex min-h-11 items-center justify-center px-2 py-1.5 text-center text-sm text-muted-foreground"
            >
              {mobileNav.contact.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
