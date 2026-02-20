import {test,expect} from '@playwright/test';
test.describe('dynamic table scenarios',()=>{
    const url= 'https://testautomationpractice.blogspot.com/';
    let Network;
    let Memory;
    let CPU;
    let disk;
    const column = 
    test('fetchRow&ColumncountandTableName',async({page})=>{
        await page.goto(url);
        const Tname = await page.getByText("Dynamic Web Table").innerText();
        const rows = await page.locator("//table[@id='productTable']//tbody//td").count()
        const columns = await page.locator("//table[@id='productTable']//tbody//tr").count()
        console.log("TableName: " + Tname,rows,columns);
    })
    //checking multiple aspects 
    test.only('FetchSpecsBasedOnName',async({page})=>{
        const name = 'Chrome';
        await page.goto(url);
        for(i=0;i<=row;i++){
            if(){
               
            
            }
        }
        
        
        // console.log("TableName: " + Tname,rows,columns);
    })
})