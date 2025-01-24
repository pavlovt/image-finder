import { expect, test } from '@playwright/test'

const url = process.env.REACT_APP_PUBLIC_URL || 'http://localhost:3000'

test.beforeEach(async ({ page }) => {
  await page.goto(url)
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Image Finder/)
})

test('search for a title', async ({ page }) => {
  await expect(page.getByText('Image Finder')).toBeVisible()
})

test('fill the filter form', async ({ page }) => {
  await page.getByTestId('first-name-input').fill('John')
  await page.getByTestId('last-name-input').fill('Smith')
  await page.getByTestId('topic-select').fill('Cars')
  await page.getByTestId('submit-button').click()

  await expect(page.getByText('Please make your choice')).toBeVisible()
})
