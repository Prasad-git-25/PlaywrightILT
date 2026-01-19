    export class homePage{
    constructor(page){
        this.page = page;
        this.ProductList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.AddToCartBtn = "//a[normalize-space()='Add to cart']";
        this.CartLink = "//a[@id='cartur']";
    }

    async AddProductToCart(ProductName){
        const productlist = await this.page.$$(this.ProductList)
        console.log(productlist)
        for(const product of productlist){
            if(ProductName === await product.textContent())
            {   
                await this.page.waitForTimeout(3000)
                await product.click(this.AddProductToCart)
                break;
            }
         }
         await this.page.waitForTimeout(5000)
         await this.page.locator(this.AddToCartBtn).click()
         await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('Product added.'))
            {  
                await dialog.accept();
            }
         })
         
        }

        async gotoCart()
        {
               await this.page.locator(this.CartLink).click()
        }
}