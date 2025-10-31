export class cartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('button[data-test="checkout"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
