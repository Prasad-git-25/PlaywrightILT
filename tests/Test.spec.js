    import {test,expect} from '@playwright/test';
    test('test1',async ({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        // const defaultSlider = await page.locator('.ui-slider-handle .ui-corner-all .ui-state-default').count()
        // console.log(defaultSlider);
        // const min = defaultSlider.first()
        // const max = defaultSlider.last()

        
        //     // await min.focus()
        //     await min.press('ArrowRight')
        //     await min.press('ArrowRight')
        //     await min.press('ArrowRight')

            // await min.press('ArrowRight')
const minHandle = page.locator("(//span[contains(@class,'ui-slider-handle')])[1]");
// const maxHandle = page.locator("(//span[contains(@class,'ui-slider-handle')])[2]");
 
// Move MIN slider
// await element.scroll_into_view_if_needed()

await minHandle.scrollIntoViewIfNeeded();

const minBox = await minHandle.boundingBox();

await page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2);
await page.mouse.down();
// await minBox.dragTo(minBox,{targetPosition: {x:90, y:0}}) 
await page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2);

// await page.mouse.move(minBox.x + 100, minBox.y); //moving right to 100 pixles
 await page.mouse.move(minBox.x + (minBox.width * -9), minBox.y); //moving slider to backward

await page.mouse.up();
await page.waitForTimeout(3000)



    })