import { TanStackRouterVite as tanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => {
  const { PORT = 5173 } = loadEnv(mode, process.cwd(), "");

  return {
    entries: ["index.html"],
    plugins: [
      react(),
      tanStackRouterVite({
        autoCodeSplitting: true,
        generatedRouteTree: "./src/route-tree.gen.ts",
        quoteStyle: "double",
        semicolons: true,
      }),
      tsconfigPaths(),
      VitePWA({
        devOptions: {
          type: "module",
        },
        manifest: {
          icons: [
            {
              sizes: "64x64",
              src: "pwa-64x64.png",
              type: "image/png",
            },
            {
              sizes: "192x192",
              src: "pwa-192x192.png",
              type: "image/png",
            },
            {
              purpose: "any",
              sizes: "512x512",
              src: "pwa-512x512.png",
              type: "image/png",
            },
            {
              purpose: "maskable",
              sizes: "512x512",
              src: "maskable-icon-512x512.png",
              type: "image/png",
            },
          ],
          name: "React Starter",
          short_name: "React Starter",
          theme_color: "#ffffff",
        },
        pwaAssets: {
          config: true,
          disabled: false,
          overrideManifestIcons: true,
        },
        registerType: "autoUpdate",
      }),
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
