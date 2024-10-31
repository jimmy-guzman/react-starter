import { defineConfig, devices } from "@playwright/test";

const port = process.env["PORT"] ?? "5173";
const baseURL = process.env["BASE_URL"] ?? `http://localhost:${port}`;
const isCI = Boolean(process.env["CI"]);

export default defineConfig({
  forbidOnly: isCI,
  fullyParallel: true,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  reporter: "html",
  retries: isCI ? 2 : 0,
  testDir: "./e2e",
  use: { baseURL, trace: "on-first-retry" },
  ...(isCI && { workers: 1 }),
});
