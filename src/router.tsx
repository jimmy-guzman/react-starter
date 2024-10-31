import { createRouter } from "@tanstack/react-router";

import { Error } from "./pages/error";
import { NotFound } from "./pages/not-found";
import { routeTree } from "./route-tree.gen";

export const router = createRouter({
  defaultErrorComponent: Error,
  defaultNotFoundComponent: NotFound,
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
