import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { appLinks, company, footerColumns } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            {company.legalName} is a technology-driven mobility and logistics company connecting
            people, goods and transport capacity across Kenya.
          </p>

          <dl className="mt-6 space-y-3 text-sm text-ink-muted">
            <div className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" />
              <div>
                <dt className="sr-only">Registered office</dt>
                <dd>{company.registeredOffice}</dd>
                <dd>{company.postalAddress}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0" />
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a className="hover:text-ink-foreground" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0" />
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a className="hover:text-ink-foreground" href={`tel:${company.phone.replace(/\s+/g, "")}`}>
                    {company.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="eyebrow text-ink-foreground">{column.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-ink-muted transition-colors hover:text-ink-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="eyebrow text-ink-foreground">Apps</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {appLinks.map((app) => (
              <li key={app.label}>
                <Link
                  to={app.to}
                  className="group inline-flex items-start gap-2 text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  <Smartphone aria-hidden className="mt-0.5 size-4 shrink-0" />
                  <span>
                    {app.label}
                    <span className="block text-xs opacity-70">{app.note}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Registered in {company.country}.
          </p>
          <p>{company.domain}</p>
        </div>
      </div>
    </footer>
  );
}
