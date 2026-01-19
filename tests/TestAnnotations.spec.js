import { test, expect } from '@playwright/test';

// test.afterEach(async ({}, testInfo) => {
  
//   console.log(`⏱ Test "${testInfo.title}" took ${testInfo.duration} ms`);
// });

test('SlowAnnotation',async({page})=>{
    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    await page.goto(url);
    // test.slow();
   //  await page.locator('//input').fill("name"); // based on some codition we can delay the test execution
    await expect(page).toHaveURL(url);
    await page.waitForURL('**/this-path-will-never-exist');

    
})
