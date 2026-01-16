const {chromium} = require('playwright');
const {test, expect} = require('@playwright/test');

test('AmazonSearch',async()=>{
   
    const browser = await chromium.launch({headless:false, slowMo: 1000})
    const context = await browser.newContext()
    const page = await context.newPage();
    const url = 'https://www.amazon.com/'
    await page.goto(url);
    await expect(page).toHaveURL(url);
    //Search for the product
    await page.locator("//input[@id='twotabsearchtextbox']").fill("Amazon Basics Universal Portable Smartphone Holder for Car");
    await page.click('//input[@id="nav-search-submit-button"]');
    
    //select product
     await page.click('//div[@data-component-type="s-search-result"][1]');
     //await expect(page.waitForSelector('title="Add to Shopping Cart')).toBeVisible();
     //await page.getByTitle('title="Add to Shopping Cart').click();
    // const pname = await page.locator("//span[@id='productTitle']").textContent();
    // console.log(pname);
    //Add to cart
    //Open cart
    //await page.click('#nav-cart-count');
    await page.waitForTimeout(3000);

})


