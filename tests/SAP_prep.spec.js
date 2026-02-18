// Practice questions:
import { test, expect } from '@playwright/test'
test("practiceMod",async({page})=>{
    const URL = "https://www.natwest.com/"
    console.log("practiceMod")

    await page.goto(URL)
    await page.waitForTimeout(3000)
    
    await page.getByRole('button',{name:"Allow All Cookies"}).click()
    await page.locator('//a//span[text()="See our switch offer"]').click()
    await page.waitForTimeout(5000)

    console.log("App just launched")

})
