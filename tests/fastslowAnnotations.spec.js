    
import { test, expect } from '@playwright/test';

test.describe('Login flow @fast', () => {
  test('login @fast', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('@fast');
    
  });
});

test('login @slow', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  console.log('slow');
});

//npx playwright test --grep @fast