import { createRouter } from "@tanstack/react-router";

import { DefaultError } from "./components/default-error";
import { DefaultNotFound } from "./components/default-not-found";
import queryClient from "./query.client";
import { routeTree } from "./route-tree.gen";

export const router = createRouter({
  context: {
    queryClient,
  },
  defaultErrorComponent: ({ error, reset }) => {
    return (
      <main className="grid min-h-screen place-items-center">
        <DefaultError error={error} reset={reset} />
      </main>
    );
  },
  defaultNotFoundComponent: () => {
    return (
      <main className="grid min-h-screen place-items-center">
        <DefaultNotFound />
      </main>
    );
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  routeTree,
});
