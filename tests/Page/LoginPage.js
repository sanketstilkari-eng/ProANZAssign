// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(email, password) {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await this.page.locator('input#userEmail').fill(email);
    await this.page.locator('input#userPassword').fill(password);
    await this.page.locator('input#login').click();
  }
}

module.exports = { LoginPage };