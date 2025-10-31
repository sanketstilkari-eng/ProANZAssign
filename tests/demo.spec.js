 const { expect} = require('@playwright/test');
 //const { test } = require('./my-test');
 const {POManager} = require('../tests/Page/POManager');
 const dataset =  JSON.parse(JSON.stringify(require("../tests/utils/data.json")));

 test.beforeAll( () => {
  console.log("i am the first");
  

 })
 for (const data of dataset) {

 test(`testing with ${data.email}`, async ({page,person})=>
 {
   const poManager = new POManager(page);
     const username = "anshika@gmail.com";
     const password = "Iamking@000"
     const productName = 'Zara Coat 4';
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.email,data.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(data.productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();
 });
}

 




 

