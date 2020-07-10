import {Given, When, Then, TableDefinition} from "cucumber";
import {WebPageFactory} from 'test/page_objects/factory_pattern/WebPageFactory'
import {WebPage} from "test/page_objects/factory_pattern/WebPage";

const webPageFactory = new WebPageFactory();
let webPage: WebPage;

Given(/^I open "([^"]*)" page$/, async (page: string) => {
    webPage = await webPageFactory.getWebTestPage(page)
    await webPage.openWebPage();
});

Then(/^it should have "([^"]*)" as page title$/, async (value: string) => {
    const pageTitle = await webPage.getWebPageTitle();
    expect(pageTitle).toBe(value);
});

When(/^I search for "([^"]*)"$/, async (searchParam: string) => {
    await webPage.searchForSomething(searchParam);
});

Then(/^the "([^"]*)" should be displayed$/, async (searchResult: string) => {
    await webPage.assertSearchResult(searchResult)
});

When(/^I search for "([^"]*)" using the lucky button$/, async (searchParam: string) => {
    await webPage.searchUsingLuckyButton(searchParam)
});

Then(/^I should be navigated to the BBC website$/, async (table: TableDefinition) => {
    const title = await webPage.getWebPageTitle();
    const hashes = table.hashes();
    hashes.forEach((hash) => {
        expect(title).toEqual(hash.expected_title);
    });
});
