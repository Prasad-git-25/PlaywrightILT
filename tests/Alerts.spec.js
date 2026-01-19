const {chromium} = require('playwright');
const {test, expect} = require('@playwright/test');

test.skip('Alerts',async()=>{
   
    const browser = await chromium.launch({headless:false, slowMo: 1000})
    const context = await browser.newContext()
    const page = await context.newPage();
    const url = 'https://testautomationpractice.blogspot.com/'
    await page.goto(url);
    await expect(page).toHaveURL(url);
    page.on('dailog', async dailog=>{
        expect(dailog.type()).toContain('alert');
        expect(dailog.message()).toContain('I am an alert box!');
        await dailog.accept();
    })
    
    await page.locator('//button[@id="alertBtn"]').click();
    await page.close();

})

test.skip('ConfirmAlert',async()=>{
   
    const browser = await chromium.launch({headless:false, slowMo: 1000})
    const context = await browser.newContext()
    const page = await context.newPage();
    const url = 'https://testautomationpractice.blogspot.com/'
    await page.goto(url);
    await expect(page).toHaveURL(url);
    page.on('dailog', async dailog=>{
        expect(dailog.type()).toContain('Confirm alert');
        expect(dailog.message()).toContain('Press a button!');
        await dailog.dismiss();
    })
    
    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    await page.close();

})

test('PromptAlert',async()=>{
   
    const browser = await chromium.launch({headless:false, slowMo: 1000})
    const context = await browser.newContext()
    const page = await context.newPage();
    const url = 'https://testautomationpractice.blogspot.com/'
    await page.goto(url);
    const user = 'Andrew';
    await expect(page).toHaveURL(url);
    page.on('dailog', async dailog=>{
        // expect(dailog.type()).toContain('Prompt');
        expect(dailog.message()).toContain('Please enter your name:')
        expect(dailog.defaultValue()).toContain('Harry Potter');
        await dailog.dismiss("Cheve");
    })
    
    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator('#demo')).toContainText('Hello Cheve! How are you today?');
    await page.close();

})

