import { createFileRoute } from "@tanstack/react-router";

import { ComingSoon } from "@/components/layout/ComingSoon";

const title = "Shop — Coming Soon | LYNTRA";
const description = "LYNTRA shopping and delivery services are coming soon.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/shop" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/shop" }],
  }),
  component: () => <ComingSoon title="Shop" intro="A simpler way to arrange shopping and delivery is on the way." />,
});
