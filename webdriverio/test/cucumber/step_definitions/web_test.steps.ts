import {Given, When, Then} from "cucumber";
import {WebPageFactory} from 'test/page_objects/factory_pattern/WebPageFactory'
import {WebPage} from "test/page_objects/factory_pattern/WebPage";

const webPageFactory = new WebPageFactory();
let webPage: WebPage;

Given(/^I have a "([^"]*)" page$/, (page: string) => {
    webPage = webPageFactory.getWebTestPage(page)
});

When(/^I open web page$/, () => {
    webPage.openWebPage();
});

Then(/^it should have "([^"]*)" as page title$/, (value: string) => {
    const googlePageTitle = webPage.getWebPageTitle();
    expect(googlePageTitle).toBe(value);
});
