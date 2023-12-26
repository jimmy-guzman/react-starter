import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/React Starter Plus/)
})

test.describe('features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('navigate to features from nav', async ({ page }) => {
    await page
      .getByRole('navigation')
      .getByRole('link', { name: /features/i })
      .click()

    await page.getByRole('heading', { name: 'Features' }).isVisible()
  })

  test('navigate to features from link', async ({ page }) => {
    await page
      .getByRole('main')
      .getByRole('link', { name: /features/i })
      .click()

    await page.getByRole('heading', { name: 'Features' }).isVisible()
  })
})

test.describe('external links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
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

    await page.getByRole('link', { name: 'React', exact: true }).click()

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

    await page.getByRole('link', { name: 'GitHub' }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL(
      'https://github.com/jimmy-guzman/react-starter'
    )
  })
})
