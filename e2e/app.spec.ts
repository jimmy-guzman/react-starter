import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/React Starter/);
});

test("not found", async ({ page }) => {
  await page.goto("/lost");

  await expect(page).toHaveTitle(/React Starter/);

  await expect(
    page.getByRole("alert", {
      name: /page not found/i,
    }),
  ).toBeInViewport();
});

test.describe("external links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("opened vite docs", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /vite/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://vite.dev/");
  });

  test("opened React docs", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { exact: true, name: "React" }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://react.dev/");
  });

  test("opened TypeScript docs", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /TypeScript/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://www.typescriptlang.org/");
  });

  test("opened tailwindcss docs", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /tailwindcss/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://tailwindcss.com/");
  });

  test("opened repo", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: "GitHub" }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(
      "https://github.com/jimmy-guzman/react-starter",
    );
  });

  test("opened Bun", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: "Bun" }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://bun.com");
  });

  test("opened daisyUI docs", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");

    await page.getByRole("link", { name: /daisyUI/i }).click();

    const newPage = await pagePromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL("https://daisyui.com");
  });
});
