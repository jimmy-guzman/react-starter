import type { KnipConfig } from "knip";

export default {
  compilers: {
    css: (text: string) => {
      // https://www.jimmy.codes/blog/fix-knip-false-positives-tailwindcss-v4
      return [...text.matchAll(/@(?:import|plugin)\s+["']([^"']+)["']/g)]
        .map(([_, dep]) => {
          return `import "${dep}";`;
        })
        .join("\n");
    },
  },
  eslint: {
    entry: ["eslint.config.ts"],
  },
  ignore: ["src/route-tree.gen.ts"],
  ignoreDependencies: [
    "gitzy",
    "@iconify-json/*",
    "babel-plugin-react-compiler",
  ],
} satisfies KnipConfig;
