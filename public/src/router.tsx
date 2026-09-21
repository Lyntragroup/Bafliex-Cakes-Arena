import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Prefetch route code on link intent while avoiding repeated fetches during
    // the same short interaction window. This improves in-app navigation without
    // eagerly downloading every page at first load.
    defaultPreload: "intent",
    defaultPreloadStaleTime: 30_000,
  });

  return router;
};
