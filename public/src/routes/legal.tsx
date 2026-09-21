import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/layout/ComingSoon";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal & Privacy | LYNTRA GROUP LIMITED" },
      { name: "description", content: "Privacy Notice, Data Protection, Terms and Cookie Policy. These documents are being prepared." },
      { property: "og:title", content: "Legal & Privacy | LYNTRA" },
      { property: "og:description", content: "Privacy Notice, Data Protection, Terms and Cookie Policy. These documents are being prepared." },
      { property: "og:url", content: "https://lyntra.co.ke/legal" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/legal" }],
  }),
  component: Page,
});

function Page() {
  return <ComingSoon title="Legal & Privacy" intro="Privacy Notice, Data Protection, Terms and Cookie Policy. These documents are being prepared." />;
}
