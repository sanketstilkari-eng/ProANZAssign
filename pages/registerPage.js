export class registerPage {
  constructor(page) {
    this.page = page;
    this.link = page.locator('text=Register');
    this.fields = {
      firstName: page.locator('#customer\\.firstName'),
      lastName: page.locator('#customer\\.lastName'),
      address: page.locator('#customer\\.address\\.street'),
      city: page.locator('#customer\\.address\\.city'),
      state: page.locator('#customer\\.address\\.state'),
      zip: page.locator('#customer\\.address\\.zipCode'),
      phone: page.locator('#customer\\.phoneNumber'),
      ssn: page.locator('#customer\\.ssn'),
      username: page.locator('#customer\\.username'),
      password: page.locator('#customer\\.password'),
      confirm: page.locator('#repeatedPassword'),
    };
    this.submit = page.locator('input[value="Register"]');
  }

  async register(user) {
    await this.link.click();
    for (const [key, locator] of Object.entries(this.fields)) {
      await locator.fill(user[key]);
    }
    await this.submit.click();
  }
}
