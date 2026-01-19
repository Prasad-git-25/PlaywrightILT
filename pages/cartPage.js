    export class cartPage{
    constructor(page){
        this.page=page;
        this.ItemList='//*[@id="tbodyid"]//tr//td[2]';
    }

    async CartItemList(ProductName)
    {
       const productnames=await this.page.$$(this.ItemList)
       for (const PName of productnames)
       {
            console.log(await PName.textContent())
            if (ProductName === await PName.textContent())
            
                {
                    return true;
                    break;
                }

       }
    }
}