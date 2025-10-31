import { test, expect } from '@playwright/test';
import { registerPage } from '../pages/registerPage';
import { loginPage } from '../pages/loginPage';
import { accountPage } from '../pages/accountPage';
import { loanPage } from '../pages/loanPage';
import { logoutPage } from '../pages/logoutPage';

test('Parabank full flow automation', async ({ page }) => {
  const user = {
    firstName: 'sanket',
    lastName: 'tilkar',
    address: '123 kop St',
    city: 'KP',
    state: 'MH',
    zip: '123456',
    phone: '9087655723',
    ssn: '123-45-6789',
    username: 'sankett',
    password: 'Principal@1',
    confirm: 'Principal@1',
  };

  const register = new registerPage(page);
  const login = new loginPage(page);
  const account = new accountPage(page);
  const loan = new loanPage(page);
  const logout = new logoutPage(page);

  await page.goto('https://parabank.parasoft.com/parabank');
  //await register.register(user);
  await login.bankLogin(user.username, user.password);
  await account.openNewAccount();
  await account.getTotalBalance();
  await loan.requestLoan('5000', '500');
  await logout.logout();
});
