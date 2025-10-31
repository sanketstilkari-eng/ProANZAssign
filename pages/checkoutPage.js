export class checkoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('input[data-test="continue"]');
    this.finishButton = page.locator('button[data-test="finish"]');
  }

  async fillDetails(firstName, lastName, zip) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zip);
    await this.continueButton.click();
    await this.finishButton.click();
  }
}
