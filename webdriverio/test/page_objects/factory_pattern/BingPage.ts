import { WebPage } from "test/page_objects/factory_pattern/WebPage";

const url = "https://www.bing.com/";

export class BingPage implements WebPage {
  searchBox: any;

  async openWebPage() {
    await browser.url(url);
    await browser.pause(100);
  }

  async searchForSomething(searchItem: string) {
    this.searchBox = await $('[name="q"]');
    await this.searchBox.waitForExist();
    await this.searchBox.addValue(searchItem);
    await browser.pause(500);
    await browser.keys("Enter");
  }

  getWebPageTitle() {
    return browser.getTitle();
  }

  async assertSearchResult(value: string) {
    const result = await $(`a=${value}`);
    expect(await result.isDisplayed()).toEqual(true);
  }
}
