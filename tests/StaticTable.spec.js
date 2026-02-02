import { test, expect } from '@playwright/test';

test('Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    
    //console.log("Table value:", Table)
    const Table=await page.locator('#productTable')
    
    // const columns= await Table.locator('tbody tr th')
    // console.log("NUmber of Columns in Table: ",columns.count())
    // await expect.soft(await columns.count()).toBe(4)

    const Rows= await Table.locator("tbody tr")
     // console.log("NUmber of Rows in Table: ",Rows.count())
    // await expect(await Rows.count()).toBe(7)

    //select check box for a particualr product

                    // const MatchedRow = Rows.filter({
                    //     has: page.locator('td'),
                    //     hasText: 'Smartwatch'
                    // })
                    // await MatchedRow.locator('input').check()

    // Select multiple products by using reusable products in JS(Function)
        
                    // await chooseProducts(Rows,page,'Smartphone')
                    // await chooseProducts(Rows,page,'Laptop')
                    // await chooseProducts(Rows,page,'Tablet')

    // Print all product details using for loop
         
                    // for(let i=0; i<=await Rows.count();i++)
                    // {   
                    //     const row=Rows.nth(i);  //Getting the index value from the rows var
                    //     const tds=row.locator('td');  //getting TD values from the index given from Row var
                    //     for(let j=0;j<=await tds.count()-1;j++)  //Looping through td values and print them 
                    //     {
                    //             console.log(await tds.nth(j).textContent());
                    //     }
                    // }
    // how to repeat all the data from multiple pages ---Pagination(Read data from all the pages in the table)
            const pages=await page.locator('.pagination li a');
            console.log('number of pages: ', await pages.count());
            for(let p=0; p< await pages.count(); p++)
            { 
                if(p>0)
                {
                    await pages.nth(p).click()
                }

                for(let i=0; i<=await Rows.count(); i++)
                    {   
                        const row=Rows.nth(i);  //Getting the index value from the rows var
                        const tds=row.locator('td');  //getting TD values from the index given from Row var
                        for(let j=0; j<=await tds.count()-1; j++)  //Looping through td values and print them 
                        {
                                console.log(await tds.nth(j).textContent());
                        }
                    }
                await page.waitForTimeout(3000)

            }
     await page.waitForTimeout(3000)
      await page.close()
})

async function chooseProducts(Rows,page,name)
{
    
                    const MatchedRow = Rows.filter({
                        has: page.locator('td'),
                        hasText: name
                    })
                    await MatchedRow.locator('input').check()

}