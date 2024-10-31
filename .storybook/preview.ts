import "../src/main.css";

import type { Preview } from "@storybook/react";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

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
