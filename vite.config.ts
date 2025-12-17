import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

const DEFAULT_PORT = 5173;

export default defineConfig(({ mode }) => {
  const { PORT = DEFAULT_PORT } = loadEnv(mode, process.cwd(), "");

  return {
    entries: ["index.html"],
    plugins: [
      devtools(),
      tailwindcss(),
      react({
        babel: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      tanstackRouter({
        autoCodeSplitting: true,
        generatedRouteTree: "./src/route-tree.gen.ts",
        quoteStyle: "double",
        semicolons: true,
      }),
      tsconfigPaths({
        projectDiscovery: "lazy",
      }),
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
          image: "public/logo.svg",
          preset: "minimal-2023",
        },
        registerType: "autoUpdate",
      }),
    ],
    server: {
      port: Number(PORT),
    },
    test: {
      environment: "happy-dom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      globals: true,
      setupFiles: "./src/testing/setup.ts",
    },
  };
});
