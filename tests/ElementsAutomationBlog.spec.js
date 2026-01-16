const {chromium} = require('playwright')
import { test, expect } from '@playwright/test';
test('findElement',async({})=>{
    //Launching the browser
    const browser = await chromium.launch({
    headless: false  // change to true if you want headless mode
    });
    
  // Create a new browser context
  const context = await browser.newContext();

   // Create a new page inside the context
   const page = await context.newPage();
    let year = 2025;
    let month = 'Dec';
    let day = 25;
    const dateObj = new Date();
    const date = dateObj.getDate();

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Practice");
    await page.waitForTimeout(3000);
    await page.fill('#name',"NewUser");
    await page.fill('#email',"NewUser@gmail.com");
    await page.fill('#phone',"+91 9999999999");
    await page.locator("//textarea[@id='textarea']").fill("India-APAC");
    await page.click('#male');
    await page.waitForTimeout(1000);
    await expect(page.locator('#male')).toBeChecked();
    await page.locator("//select[@id = 'country']").selectOption('Germany');
    //await expect(page.locator('#country option:checked')).toHaveText('Germany');
    await page.locator('#colors').selectOption([{value: 'blue'},{value: 'green'}]);
    await expect(page.locator('#colors')).toHaveValues(['blue', 'green']);
    //DatePickerSC1: directly passing value to date field
    await page.fill("//input[@id='datepicker']",'01/14/2026');
    // await page.fill("//input[@id='txtDate']",'01/14/2026');
    
    //DatePickerSC2: selecting value from the calendar
    await page.click("//input[@id='txtDate']");

    // await calendar.click()
    // const Year = await page.locator('.ui-datepicker-year').textContent();
     const options = await page.$$('.ui-datepicker-year');
    // const Month = await page.locator('.ui-datepicker-month').textContent();
     await page.locator('.ui-datepicker-year').selectOption(`${year}`);
     await page.locator('.ui-datepicker-month').selectOption(`${month}`);
     await page.click(`//a[@class='ui-state-default'][text()='${day}']`);
   // Date picker 3: Current Date and Future Date selection
     await page.waitForTimeout(3000);
     // await page.click("//input[@id='start-date']")
     //await page.fill("//input[@id='start-date']","01142023")
     await page.close();
     await browser.close();
     
    })