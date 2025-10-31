// tests/clientAppLogin.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../tests/Page/LoginPage.js');
const { ProductPage } = require('../tests/Page/ProductPage.js');

test('Client App Login and Order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.login('sanketstilkari@gmail.com', 'Principal@123');
  await page.waitForLoadState('networkidle');

  await productPage.addProductToCart('ZARA COAT 3');

  await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
  await expect(page.getByText("ZARA COAT 3")).toBeVisible();

  await page.getByRole("button",{name :"Checkout"}).click();
  await page.getByPlaceholder("Select Country").pressSequentially("ind");
  await page.getByRole("button",{name :"India"}).nth(1).click();
  await page.getByText("PLACE ORDER").click();

  await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});