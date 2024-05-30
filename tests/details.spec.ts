// First dive into E2E testing with Playwright. Similar workflow to Selenium, which I used to use back in high school,
// when I thought chromium was the same as chrome.

import { test, expect } from '@playwright/test';

test.describe('Details Page', () => {
    const item = {
        sku: '9EN8WLT2',
    };
    test('Test Page', async ({ page }) => {
        await page.goto('/product/' + item.sku);
        await expect(page).toHaveURL(/\/product\/[\w-]+/);
    });
    test('Details exist', async ({ page }) => {
        await page.goto('/product/' + item.sku);
        const details = ['title', 'price', 'desc', 'brand', 'cat'];
        for (const detail of details) {
            await expect(page.getByTestId(detail).first()).toHaveText(/[\w\s]+/);
        }
    });
});
