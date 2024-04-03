import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import type { RenderOptions } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { type ReactElement, type ReactNode, useMemo } from "react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
const Wrapper = ({ children }: { children: ReactNode }) => {
  const router = useMemo(() => {
    const rootRoute = createRootRoute({ component: Outlet });
    const testingRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/",
      component: () => children,
    });
    const routeTree = rootRoute.addChildren([testingRoute]);

    return createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
    });
  }, [children]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options: Omit<RenderOptions, "wrapper"> = {},
) => {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: Wrapper,
      ...options,
    }),
  };
};

export { renderHook, screen, within } from "@testing-library/react";
export { customRender as render };
