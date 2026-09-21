import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/layout/ComingSoon";

const title = "Travel — Coming Soon | LYNTRA";
const description = "LYNTRA travel planning and longer-journey transport services are coming soon.";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/travel" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/travel" }],
  }),
  component: () => <ComingSoon title="Travel" intro="Travel planning and transport options for longer journeys are on the way." />,
});
