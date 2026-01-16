const {chromium} = require('playwright');
const {test, expect} = require('@playwright/test');

test('VerifyCart',async()=>{
    //launch chromium browser
    const browser = await chromium.launch({
        headless:false,
        slowMo: 3000
        
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
    await page.waitForTimeout(2000);
    //select product
    // await page.locator('#product-overlay').hover();
    await page.locator("//a[normalize-space()='View Product']").click();
    const pname = await page.locator('//div[@class="product-information"]//h2').textContent();
    console.log(pname);
    await page.locator('#quantity').fill('1'); //selectQuantity
    await page.locator("//button/i[@class='fa fa-shopping-cart']").click(); //add to cart
    await page.locator('//a[@href="/view_cart"]//u').click();
    const cartItem = await page.locator('//table//tbody//td//h4').textContent();
    console.log(cartItem);
    expect(pname).toContain(cartItem);

    // Delete item from the cart
    await page.locator('cart_quantity_delete').click();
    await expect (page).locator("//b[normalize-space()='Cart is empty!']").toContain('Cart is empty!');
    await page.close();

})


