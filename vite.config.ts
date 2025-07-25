import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-oxc";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

const DEFAULT_PORT = 5173;

export default defineConfig(({ mode }) => {
  const { PORT = DEFAULT_PORT } = loadEnv(mode, process.cwd(), "");

  return {
    entries: ["index.html"],
    plugins: [
      tailwindcss(),
      react(),
      tanstackRouter({
        autoCodeSplitting: true,
        generatedRouteTree: "./src/route-tree.gen.ts",
        quoteStyle: "double",
        semicolons: true,
      }),
      tsconfigPaths(),
    ],
    server: {
      port: Number(PORT),
    },
    test: {
      coverage: {
        exclude: [
          ...(configDefaults.coverage.exclude ?? []),
          "playwright-report/**",
          "storybook-static/**",
          ".storybook/**",
          "**/*.stories.*",
          "**/main.tsx",
          "{tailwind,postcss,playwright}.config.*",
          "**/*.gen.*",
        ],
      },
      environment: "happy-dom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      globals: true,
      setupFiles: "./src/testing/setup.ts",
    },
  };
});
