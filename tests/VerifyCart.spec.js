const {chromium} = require('playwright');
const {test, expect} = require('@playwright/test');

test('VerifyCart',async()=>{
    //launch chromium browser
    const browser = await chromium.launch({
        headless:false
        
    })
    //Creating a new browser context
    const context = await browser.newContext()
    //creating a new page context
    const page = await context.newPage();
    // Launch amazon page
    await page.goto('https://automationexercise.com/products');
    await expect(page).toHaveURL('https://automationexercise.com/products');
    //Search for the product
    await page.locator("//input[@name='search']").fill("Men T shirt");
    await page.click("//button[@id='submit_search']");
    await page.waitForTimeout(5000);
    //select product
    // await page.locator('#product-overlay').hover();
    await page.locator("//a[normalize-space()='View Product']").click();
    const pname = await page.locator('//div[@class="product-information"]//h2').textContent();
    console.log(pname);
    //Add to cart
    await page.locator('//button[@class="btn btn-default cart"]').click();
    //Open cart
    //await page.click('');
    //verifyCart:
    await page.locator('//a[@href="/view_cart"]').click();
    await page.waitForTimeout(3000);
    await page.close();

})


