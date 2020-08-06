import {Given, When, Then, TableDefinition} from "cucumber";
import {WebPageFactory} from 'test/page_objects/factory_pattern/WebPageFactory'
import {WebPage} from "test/page_objects/factory_pattern/WebPage";

const webPageFactory = new WebPageFactory();
let webPage: WebPage;

Given(/^Bob opens "([^"]*)" page$/, async (page: string) => {
    webPage = await webPageFactory.getWebTestPage(page);
    await webPage.openWebPage();
});

Then(/^it should have "([^"]*)" as page title$/, async (value: string) => {
    const pageTitle = await webPage.getWebPageTitle();
    expect(pageTitle).toBe(value);
});

When(/^Bob searches for "([^"]*)"$/, async (searchParam: string) => {
    await webPage.searchForSomething(searchParam);
});

Then(/^the "([^"]*)" should be displayed$/, async (searchResult: string) => {
    await webPage.assertSearchResult(searchResult);
});

When(/^Bob searches for "([^"]*)" using the lucky button$/, async (searchParam: string) => {
    await webPage.searchUsingLuckyButton(searchParam);
});

Then(/^Bob should be navigated to the expected website$/, async (table: TableDefinition) => {
    const title = await webPage.getWebPageTitle();
    const hashes = table.hashes();
    hashes.forEach((row) => {
        expect(title).toEqual(row.expected_title);
    });
});

When(/^Bob navigates to "([^"]*)" page via "([^"]*)"$/, async (typeScriptPageLink: string, docLink: string) => {
    await webPage.clickOnWebElement(docLink);
    await webPage.clickOnWebElement(typeScriptPageLink);
});

Then(/^Bob should be able to click on all navigation menu links$/, async (table: TableDefinition) => {
    const hashes = table.hashes();
    for (const hash of hashes) {
        await webPage.clickOnWebElement(hash.links);
        const actualTitle = await webPage.getWebPageTitle();
        expect(actualTitle).toEqual(hash.expected_title);
    }
});
When(/^Bob navigates to "([^"]*)" page$/, async (aboutLink: string)=> {
    await webPage.clickOnWebElement(aboutLink);

});
Then(/^Bob should be able to scroll into "([^"]*)" section$/, async (followUsLink: string) => {
    await webPage.assertScrollToSectionLink(followUsLink);

});
Then(/^the "([^"]*)" link should be displayed$/, async (moreAboutUsLink: string) => {
    await webPage.assertScrollToPageFooter(moreAboutUsLink);
});