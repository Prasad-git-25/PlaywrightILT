import { test, expect } from '@playwright/test';

test('NestedFrames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
     // Find total no of frames
      const NumberOfFrames = await page.frames()
      console.log('Number of Frames: ', NumberOfFrames.length)
      const Frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
      await Frame3.fill("//input[@name='mytext3']",'Inside Frame3')
    // Nested Frame
      const ChildFrames=await Frame3.childFrames();
      await ChildFrames[0].locator('//div[@data-answer-value="General Web Automation"]//div[@class="uHMk6b fsHoPb"]').check()
     await page.waitForTimeout(5000)
     await page.close()
})