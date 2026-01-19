    export class loginPage{
    constructor(page){
        this.page = page;
        this.loginLink = '#login2';
        this.userName = '#loginusername';
        this.password = '#loginpassword';
        this.loginButton = "//button[normalize-space()='Log in']";
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async Login(UserName, Password){

        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userName).fill(UserName);
        await this.page.locator(this.password).fill(Password);
        await this.page.locator(this.loginButton).click();

    }
}