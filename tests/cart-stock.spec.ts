import { test, expect } from '@playwright/test';

test('navigate out of stock and back', async ({ page }) => {
  await page.goto('/');
  await page.locator('.inline-flex').first().click();
  await expect(page.locator('body')).toContainText('Out of Stock');
  await page.getByRole('link').click();
  await expect(page.locator('h1')).toContainText('Products');
});

test('in stock', async ({ page }) => {
  await page.goto('/');
  await page.locator('div:nth-child(2) > .rounded-lg > div:nth-child(3) > div > .flex > .inline-flex').click();
  await expect(page.locator('body')).toContainText('In Stock');
});

test('addtocart', async ({ page }) => {
  await page.goto('/');
  await page.locator('div:nth-child(2) > .rounded-lg > div:nth-child(3) > div > .flex > .inline-flex').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByTestId('dropdown')).toContainText('1');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByTestId('dropdown')).toContainText('2');
});

test('add then remove', async ({ page }) => {
  await page.goto('/');
  await page.locator('div:nth-child(2) > .rounded-lg > div:nth-child(3) > div > .flex > .inline-flex').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByTestId('dropdown')).toContainText('1');
  await page.getByRole('button', { name: '1' }).click();
  await page.getByLabel('rm-cart').click();
  await expect(page.getByTestId('dropdown')).toContainText('0');
  await expect(page.getByRole('menuitem').first()).toContainText('Your cart is empty');
  
});