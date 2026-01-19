    
import { test, expect } from '@playwright/test';

test.describe('ItemSearch @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com/');
  });
   
  test('SearchPage1', async ({ page }) => {
      const search = page.locator('//textarea[@class="gLFyf"]');
      await page.locator(search).fill('ApplePhone');
      await page.locator(search).press('Enter');
  });

  test('SearchPage2', async ({ page }) => {
    const search = page.locator('//textarea[@class="gLFyf"]');
    await page.locator(search).fill('Macbook');
    await page.locator(search).press('Enter');
  });
});
