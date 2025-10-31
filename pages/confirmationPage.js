export class confirmationPage {
  constructor(page) {
    this.page = page;
    this.successMessage = page.locator('.complete-header');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async verifyOrderSuccess() {
    await this.successMessage.waitFor();
    const message = await this.successMessage.textContent();
    return message.includes('Thank you for your order!');
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
