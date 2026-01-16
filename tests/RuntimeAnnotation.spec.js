import { test, expect } from '@playwright/test';
test('RuntimeAnnotation', async ({ page }, testInfo) => {

  testInfo.annotations.push({
    type: 'info',
    description: 'I added extra information to report'},
    { type: 'category', description: 'sanity' },
)
    await page.goto('https://www.google.com/');
    page.close();
});
