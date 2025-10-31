// pages/ProductPage.js
class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart(productName) {
    const productList = this.page.locator('div.card-body');
    const count = await productList.count();

    for (let i = 0; i < count; i++) {
      const name = await productList.nth(i).locator('b').textContent();
      if (name.trim() === productName) {
        await productList.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }
}

module.exports = { ProductPage };