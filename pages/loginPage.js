export class loginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.bankusername = page.locator('input[name="username"]');
    this.bankpassword = page.locator('input[name="password"]');
    this.bankloginBtn = page.locator('input[value="Log In"]');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
 
  async bankLogin(username, password) {
    await this.bankusername.fill(username);
    await this.bankpassword.fill(password);
    await this.bankloginBtn.click();
  }
}
