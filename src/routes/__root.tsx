import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const RouterDevTools = import.meta.env.DEV
  ? lazy(async () => {
      return import("@tanstack/react-router-devtools").then((res) => {
        return {
          default: res.TanStackRouterDevtools,
        };
      });
    })
  : () => {
      return null;
    };

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

export const Route = createRootRouteWithContext()({
  component: Root,
});
