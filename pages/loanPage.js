export class loanPage {
  constructor(page) {
    this.page = page;
    this.requestLoanLink = page.locator('text=Request Loan');
    this.amount = page.locator('#amount');
    this.downPayment = page.locator('#downPayment');
    this.fromAccount = page.locator('#fromAccountId');
    this.applyBtn = page.locator('input[value="Apply Now"]');
  }

  async requestLoan(amount, downPayment) {
    await this.requestLoanLink.click();
    await this.amount.fill(amount);
    await this.downPayment.fill(downPayment);
    await this.fromAccount.selectOption({ index: 0 });
    await this.applyBtn.click();
  }
}
