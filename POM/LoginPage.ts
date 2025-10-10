import {test,expect,type Locator, type Page} from '@playwright/test';



export class LoginPage {
    readonly page: Page;
    readonly enterUsername: Locator;
    readonly enterPassword: Locator;
    readonly clickLoginButton: Locator;
    readonly errorMessage: Locator;
    readonly productRedirection: Locator;

    constructor (page: Page) {
        this.page = page;
        this.enterUsername = page.getByPlaceholder('Username');
        this.enterPassword = page.getByPlaceholder('Password');
        this.clickLoginButton = page.getByRole('button', {name: ' Login '});
        this.errorMessage = page.getByTestId('error');
        this.productRedirection = page.getByText('Swag Labs')
    }
// Enter Username
    async usernameEnter(username:string) {
        await this.enterUsername.fill(username);
    }
// Enter Password
    async passwordEnter(password:string) {
        await this.enterPassword.fill(password);
    }
// Click Button
    async buttonLoginclick() {
        await this.clickLoginButton.click();
    }
// Error Message for incorrect credentials
    async messageError() {
        await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }

// Overall login functionality
    async loginPageFunctionality(username:string,password:string) {
        await this.usernameEnter(username);
        await this.passwordEnter(password);
        await this.buttonLoginclick();
    }

    async redirectionProduct() {
        await expect(this.productRedirection).toBeVisible();
    }
}


// may babaguhin ako eto ang latest test ko
// testing lang to 
// update ulit test 2


// update ni oleg
// test test
// test at 2:45 pm