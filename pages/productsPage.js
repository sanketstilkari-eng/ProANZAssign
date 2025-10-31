export class productsPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
