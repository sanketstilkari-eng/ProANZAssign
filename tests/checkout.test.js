import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { productsPage } from '../pages/productsPage';
import { cartPage } from '../pages/cartPage';
import { checkoutPage } from '../pages/checkoutPage';
import { confirmationPage } from '../pages/confirmationPage';

test('Complete order flow on saucedemo', async ({ page }) => 
  {
  const login = new loginPage(page);
  const products = new productsPage(page);
  const cart = new cartPage(page);
  const checkout = new checkoutPage(page);
  const confirmation = new confirmationPage(page);

  await page.goto('https://www.saucedemo.com/');
  await login.login('standard_user', 'secret_sauce');
  
  await products.addProductToCart();
  await products.goToCart();
  await cart.checkout();
  await checkout.fillDetails('sanket', 'Tilkari', '916833');

  const success = await confirmation.verifyOrderSuccess();
  expect(success).toBeTruthy();

  await confirmation.logout();
});
