// Home page tests
import { test, expect } from '@playwright/test';

test.describe('Item List', () => {
  test('Item Display', async ({ page }) => {
    await page.goto('/');
    const items = await page.$$('[data-testid="item"]');
    expect(items.length).toBeGreaterThan(0);
  });

  test('Item Details', async ({ page }) => {
    await page.goto('/');
    const details = await page.$$('[data-testid="details"]');
    await details[0].click();
    await expect(page).toHaveURL(/\/product\/[\w-]+/);
  });
    
  test('Title exist', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('title').first()).toHaveText(/[\w\s]+/);
  });

  test('Img exist', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('img').first()).toBeVisible();
  });

  test('Price exist', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('price').first()).toHaveText(/[\d.]+/);
  });

  test('Dropdown', async ({ page }) => {
    await page.goto('/');
    await page.click('[data-testid="dropdown"]');
    const emptyitem = page.getByRole('menuitem');
    await expect(emptyitem).toHaveText('Your cart is empty');
  });

});

