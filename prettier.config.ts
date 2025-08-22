import type { Config } from "prettier";

import base from "@jimmy.codes/prettier-config";

const config = {
  ...base,
  tailwindStylesheet: "./src/main.css",
} satisfies Config;

export default config;
