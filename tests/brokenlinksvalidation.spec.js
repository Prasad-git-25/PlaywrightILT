    

import { test, expect, request } from '@playwright/test';

test('brokenlinkvalidation', async ({ page }) => {
  const statusCode = 200
  await page.goto('https://testautomationpractice.blogspot.com/');
  const links = await page.locator('//div[@id="broken-links"]//a').getAttribute(href)
  console.log(links);
  // page.request.get(url)
  
});

