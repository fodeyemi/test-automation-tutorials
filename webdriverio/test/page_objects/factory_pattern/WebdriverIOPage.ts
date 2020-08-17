import { WebPage } from "test/page_objects/factory_pattern/WebPage";

const url = "https://webdriver.io/";

export class WebdriverIOPage implements WebPage {
  searchBox;
  navigationLinks;

  async searchForSomething(searchItem: string) {
    this.searchBox = await $("#search_input_react");
    await this.searchBox.waitForExist();
    await this.searchBox.addValue(searchItem);
    await browser.pause(500); // todo: find a better way
    await browser.keys("Enter");
  }

  async openWebPage() {
    await browser.url(url);
    await browser.pause(100);
  }

  async getWebPageTitle() {
    return browser.getTitle();
  }

  async assertSearchResult(value: string) {
    const result = await $(`h2 > [href="#${value}"]`);
    expect(await result.isExisting()).toEqual(true);
  }

  async clickOnWebElement(value: string) {
    const element = await browser.$(`a=${value}`);
    await element.click();
  }
}
