import { createRouter } from "@tanstack/react-router";

import { DefaultError } from "./components/default-error";
import { DefaultNotFound } from "./components/default-not-found";
import { routeTree } from "./route-tree.gen";

export const router = createRouter({
  defaultErrorComponent: ({ error, reset }) => {
    return (
      <main className="grid min-h-screen place-content-center">
        <DefaultError error={error} reset={reset} />
      </main>
    );
  },
  defaultNotFoundComponent: () => {
    return (
      <main className="grid min-h-screen place-content-center">
        <DefaultNotFound />
      </main>
    );
  },
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
