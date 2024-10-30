import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/React Starter/);
});

test("not found", async ({ page }) => {
  await page.goto("/lost");

  await expect(page).toHaveTitle(/React Starter/);

  await expect(
    page.getByRole("heading", { name: "Error", level: 1 }),
  ).toBeInViewport();
});

test.describe("external links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("opened vite docs", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /vite/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://vite.dev/");
  });

  test("opened React docs", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: "React", exact: true }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://react.dev/");
  });

  test("opened TypeScript docs", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /TypeScript/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://www.typescriptlang.org/");
  });

  test("opened tailwindcss docs", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /tailwindcss/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://tailwindcss.com/");
  });

  test("opened repo", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: "GitHub" }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(
      "https://github.com/jimmy-guzman/react-starter",
    );
  });

  test("opened Bun", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: "Bun" }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://bun.sh");
  });

  test("opened daisyUI docs", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /daisyUI/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://daisyui.com");
  });
});
