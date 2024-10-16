import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import type { RenderOptions } from "@testing-library/react";
import { act, cleanup, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { type ReactElement, type ReactNode, useMemo } from "react";
import { afterEach } from "vitest";

import type { FileRoutesById } from "@/route-tree.gen";

afterEach(() => {
  cleanup();
});

interface WrapperProps {
  children: ReactNode;
  path: keyof FileRoutesById;
  initialEntries: string[];
}

// eslint-disable-next-line react-refresh/only-export-components
const Wrapper = ({ children, path, initialEntries }: WrapperProps) => {
  const { queryClient, router } = useMemo(() => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const rootRoute = createRootRoute();
    const testingRoute = createRoute({
      getParentRoute: () => {
        return rootRoute;
      },
      path,
      component: () => {
        return children;
      },
    });

    return {
      queryClient,
      router: createRouter({
        routeTree: rootRoute.addChildren([testingRoute]),
        history: createMemoryHistory({ initialEntries }),
        context: { queryClient },
      }),
    };
  }, [children, initialEntries, path]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-expect-error this is due the testing router diverging from the application router */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

const customRender = async (
  ui: ReactElement,
  {
    path = "/",
    initialEntries = [path],
    ...options
  }: Omit<RenderOptions, "wrapper"> & Partial<WrapperProps> = {},
) => {
  // eslint-disable-next-line @typescript-eslint/require-await
  const result = await act(async () => {
    return render(ui, {
      wrapper: ({ children }) => {
        return (
          <Wrapper path={path} initialEntries={initialEntries}>
            {children}
          </Wrapper>
        );
      },
      ...options,
    });
  });

  return {
    user: userEvent.setup(),
    ...result,
  };
};

export { renderHook, screen, within } from "@testing-library/react";

export { customRender as render };
