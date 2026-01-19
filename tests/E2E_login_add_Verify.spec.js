const {test, expect}=require('@playwright/test');
import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';
//grouping the test cases
test.describe('E2E_login_Add_verify', ()=>{

//Before each:
test.beforeEach(async({page})=>{
      const Login=new loginPage(page);
      await Login.gotoLoginPage();
      await Login.Login('TDVCP','TDVCP@123');
      await page.waitForTimeout(3000);
});
//logged in add item and verify cart
  test("@smoke Add item and verify cart",async({page})=>{

    //go to home page
      const Home=new homePage(page);
      await Home.AddProductToCart('Nokia lumia 1520');
      await page.waitForTimeout(3000);
      await Home.gotoCart();
    //validate the cart for the product
      const cart=new cartPage(page);
      await page.waitForTimeout(3000)
      const status=await cart.CartItemList('Nokia lumia 1520')
      expect(cart.status).toBe(true);
      await page.close();
    })
// AfterEach test taking screenshot as evidence
   test.afterEach(async({page},testinfo)=>{
    const date = new Date();
    // let evidences = `testEvidence ${date}.png`;
    // console.log(evidences);
    await page.screenshot({
        path: 'screenshot.png',
        fullPage: true
    })

    // //attach screenshot to report using runtime annotation
    // testinfo.attach('testOutCome',{
    //     path: evidences,
    //     contentType: 'image/png'
    // })
   


   })
})

         
