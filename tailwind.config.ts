import type { Config } from "tailwindcss";

import { addDynamicIconSelectors } from "@iconify/tailwind";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  daisyui: {
    logs: false,
    prefix: "dsy-",
    // see https://daisyui.com/docs/themes/ for further customization
    themes: ["dark", "light"],
  },
  plugins: [typography, daisyui, addDynamicIconSelectors()],
  theme: {
    extend: {},
  },
} satisfies Config;

export default config;
