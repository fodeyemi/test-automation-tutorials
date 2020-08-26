import { WebPageFactory } from "test/page_objects/factory_pattern/WebPageFactory";
import { WebPage } from "test/page_objects/factory_pattern/WebPage";

const webPageFactory = new WebPageFactory();

describe("test web pages", () => {
  it.skip("webdriver io page should have the right title", () => {
    let webdriverIoPage: WebPage;
    webdriverIoPage = webPageFactory.getWebTestPage("webdriverIo");
    webdriverIoPage.openWebPage();
    const webdriverPageTitle = webdriverIoPage.getWebPageTitle();
    expect(webdriverPageTitle).toBe(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    );
  });

  it.skip("google page should have the right title", () => {
    let googlePage: WebPage;
    googlePage = webPageFactory.getWebTestPage("google");
    googlePage.openWebPage();
    const googlePageTitle = googlePage.getWebPageTitle();
    expect(googlePageTitle).toBe("Google");
  });
});
