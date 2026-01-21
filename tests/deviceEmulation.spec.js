    
//device emulation
const { test, expect, devices } = require('@playwright/test');

test.use({
    ...devices['iPhone 13'],         
    locale: 'العربية-AR', //you can change the localle [العربية-AR] en-US
    timezoneId: 'Asia/Kolkata',      
    colorScheme: 'dark',            
  });

test.describe('Device emulation (iPhone 13)', () => {
  
    test('rendering in emulated device', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    // await page.goto('https://www.demoblaze.com/');
    
    // await expect(page).toHaveTitle('STORE');
    // await expect(page).toHaveScreenshot(); 
    await page.waitForTimeout(3000);
  });
});
