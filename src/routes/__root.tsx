import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const RouterDevTools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    )
  : () => null;

const Root = () => {
  return (
    <>
      <Outlet />
      <Suspense>
        <RouterDevTools position="bottom-left" />
      </Suspense>
    </>
  );
};

export const Route = createRootRouteWithContext()({ component: Root });
