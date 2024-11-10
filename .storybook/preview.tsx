import "../src/main.css";

import type { Preview } from "@storybook/react";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { createRouter, RouterContextProvider } from "@tanstack/react-router";

import { routeTree } from "@/route-tree.gen";

const router = createRouter({ routeTree });

const preview = {
  decorators: [
    withThemeByDataAttribute({
      attributeName: "data-theme",
      defaultTheme: "dark",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
    (story) => {
      return (
        <RouterContextProvider router={router}>{story()}</RouterContextProvider>
      );
    },
  ],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;

export default preview;
