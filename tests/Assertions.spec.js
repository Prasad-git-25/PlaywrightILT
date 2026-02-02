const {test, expect} = require('@playwright/test');

test('Assertions', async ({page})=>{


    // Open app url
    await page.goto('https://demo.nopcommerce.com/register');

    // 1). expect(page).toHaveURL(url)
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // 2).expect (page).toHaveTitle(title)
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3). expect(locator).toBeVisible()
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();

     // 4). expect(Locator).tobenabled()
     const searchbox = await page.locator('#small-searchterms');
     await expect(searchbox).toBeEnabled();

     // 5). expect(Locator).tobechecked()

     // Radio button
         const MaleCheckbox = await page.locator('#gender-male');
         await MaleCheckbox.check();
         await expect(MaleCheckbox).toBeChecked();
     // Checkbox
          const newslettercheck = await page.locator('#Newsletter')
          await expect(newslettercheck).toBeChecked();

     // 6). expect(Lcocator).tohaveAttribute()
         const registerbutton = await page.locator('#register-button');
         await expect(registerbutton).toHaveAttribute('type', 'submit');

     // 7). expect(Locator).toHaveText()

        await expect(await page.locator('.page-title h1')).toHaveText('Register')

     // 8). expect(locator).toconatintext()

        await expect(await page.locator('.page-title h1')).toContainText('Reg')

      // 9).  expect(locator).toHaveValue(value)
          const emailfield = await page.locator('#Email')
          await emailfield.fill('test@mail.com')
          await expect(emailfield).toHaveValue('test@mail.com')

      // 10).expect(Locator).toHaveCount(count)
            const NumberofMonths = await page.locator('select[name="DateOfBirthMonth"] option');
            await expect(NumberofMonths).toHaveCount(13);


})        