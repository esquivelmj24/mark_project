import { test, expect} from '@playwright/test'
import { LoginPage } from '../POM/LoginPage';

// // Test Scenario
// // Verify Login Functionality
// // Test Case iD: TC_01
// // Test Cases discription: 'Verify if the user should be able to login using valid username and password
// test('valid username(testusername) and password(testpassword)', async ({page})=> {
//     await page.goto('https://www.saucedemo.com/');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.getByRole('button', {name: ' Login '}).click();
// })

// // Test Case iD: TC_02
// // Verify if the user should not be able to login using valid username and invalid password
// test('valid username and invalid password', async ({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('invalid_password');
//     await page.getByRole('button', {name: ' Login '}).click();
//     await expect(page.getByTestId('error')).toHaveText('Epic sadface: Username and password do not match any user in this service')
// })

// // Test Case iD: TC_03
// // Verify if the user should not be able to login using invalid username and valid password
// test('invalid username(invalid_password) and valid password(valid_password)', async({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.getByPlaceholder('Username').fill('invalid_username');
//     await page.getByPlaceholder('Password').fill('sauce_demo');
//     await page.getByRole('button', {name: ' Login '}).click();
//     await expect(page.getByTestId('error')).toHaveText('Epic sadface: Username and password do not match any user in this service')
// })

// // Test Case iD: TC_04
// // Verify if the user should not be able to login using invalid username and password
// test('invalid username(invalid_password) and invalid password(valid_password)', async({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.getByPlaceholder('Username').fill('invalid_username');
//     await page.getByPlaceholder('Password').fill('sauce_demo');
//     await page.getByRole('button', {name: ' Login '}).click();
//     await expect(page.getByTestId('error')).toHaveText('Epic sadface: Username and password do not match any user in this service')
// })

// // Test Cases iD: TC_05
// // Verify if the user should be able to see the " Swag Labs " title from the Login Page.
// test('valid username and password', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');
//     await expect(page.getByText('Swag Labs')).toBeVisible();
// })



// Test Case id: TC_01
test('Valid Username and Password', async({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/')
    await loginPage.loginPageFunctionality('standard_user','secret_sauce')
})

// Test Case id" TC_02
test('valid username and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.loginPageFunctionality('standard_user','invalid_passwordmaramipa');
    await loginPage.messageError();
})

//Test Cases id: TC_03
test('Invalid username and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.loginPageFunctionality('standard_user','testestestest')
    await loginPage.messageError();
})

// Test Cases id: TC_04
test('invalid username and password', async({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.loginPageFunctionality('invalidusername','invalidpassword');
    await loginPage.messageError();

})

// Test Case id_TC_05
test('Redirection to Product page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.loginPageFunctionality('standard_user','secret_suace');
    // await loginPage.redirectionProduct();
})
