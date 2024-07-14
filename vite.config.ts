import { TanStackRouterVite as tanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => {
  const { PORT = 5173 } = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tanStackRouterVite({
        generatedRouteTree: "./src/route-tree.gen.ts",
        semicolons: true,
        quoteStyle: "double",
        experimental: {
          enableCodeSplitting: true,
        },
      }),
      tsconfigPaths(),
      VitePWA({
        strategies: "generateSW",
        registerType: "prompt",
        injectRegister: false,
        pwaAssets: {
          disabled: false,
          config: true,
          htmlPreset: "2023",
          overrideManifestIcons: true,
        },
        manifest: {
          name: "React Starter",
          short_name: "React Starter",
          theme_color: "#ffffff",
          icons: [
            {
              src: "pwa-64x64.png",
              sizes: "64x64",
              type: "image/png",
            },
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "maskable-icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,svg,png,svg,ico}"],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
        },
        injectManifest: {
          globPatterns: ["**/*.{js,css,html,svg,png,svg,ico}"],
        },
        devOptions: {
          enabled: false,
          navigateFallback: "index.html",
          suppressWarnings: true,
          type: "module",
        },
      }),
    ],
    server: {
      port: Number(PORT),
    },
    entries: ["index.html"],
    test: {
      environment: "happy-dom",
      globals: true,
      exclude: [...configDefaults.exclude, "e2e/*"],
      setupFiles: "./src/testing/setup.ts",
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
    },
  };
});
