export class logoutPage {
  constructor(page) {
    this.page = page;
    this.logoutLink = page.locator('text=Log Out');
  }

  async logout() {
    await this.logoutLink.click();
  }
}
