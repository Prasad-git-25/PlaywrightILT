
import { test, expect } from '@playwright/test';

test('KeyboardActions', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare');

    await page.type('[name="text1"]','Soko na iru')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(3000)
    await page.close()
})