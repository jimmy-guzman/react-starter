import type { KnipConfig } from "knip";

export default {
  eslint: {
    entry: ["eslint.config.ts"],
  },
  ignore: ["src/route-tree.gen.ts"],
  ignoreDependencies: [
    "gitzy",
    "@iconify-json/*",
    "@iconify/tailwind4",
    "tailwindcss",
    "@tailwindcss/typography",
    "daisyui",
  ],
} satisfies KnipConfig;
