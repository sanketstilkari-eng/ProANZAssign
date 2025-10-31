import { expect } from "@playwright/test";

export class accountPage {
  constructor(page) {
    this.page = page;
    this.openAccountLink = page.locator('text=Open New Account');
    this.accountType = page.locator('select[id="type"]');
    this.accountAmt = page.locator('select[id="fromAccountId"]');
    this.openBtn = page.locator('input[value="Open New Account"]');
    this.successMsg = page.locator('text=Congratulations, your account is now open.');
    this.accountOverviewLink = page.locator('text=Accounts Overview');
    this.balances = page.locator('td.balance');
  }

  async openNewAccount() {
    await this.openAccountLink.click();
    await this.accountType.selectOption('1');
    // await this.accountAmt.selectOption('1'); 
    await expect(this.accountAmt).toContainText("19338");
    await this.openBtn.click();
    await this.successMsg.waitFor();
  }

  async getTotalBalance() {
    await this.accountOverviewLink.click();
    const balanceTexts = await this.balances.allTextContents();
    const total = balanceTexts.reduce((sum, b) => sum + parseFloat(b.replace('$', '')), 0);
    console.log(`💰 Total Balance: $${total.toFixed(2)}`);
  }
}
