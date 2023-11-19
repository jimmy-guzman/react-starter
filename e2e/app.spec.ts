import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page).toHaveTitle(/React Starter/)
})

test.describe('external links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/')
  })

  test('opened vite docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /vite/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://vitejs.dev/')
  })

  test('opened React docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /react/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://react.dev/')
  })

  test('opened TypeScript docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /TypeScript/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://www.typescriptlang.org/')
  })

  test('opened tailwindcss docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /tailwindcss/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://tailwindcss.com/')
  })

  test('opened repo', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /get started/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL(
      'https://github.com/jimmy-guzman/react-starter#readme'
    )
  })
})
