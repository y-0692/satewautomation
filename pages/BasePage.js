export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path) {
    await this.page.goto(path);
  }

  async click(locator) {
    await this.page.click(locator);
  }

 

  async isVisible(locator) {
    return await this.page.isVisible(locator);
  }
}
