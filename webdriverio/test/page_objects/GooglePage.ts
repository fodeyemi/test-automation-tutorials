import {WebPage} from "test/page_objects/WebPage";

const url = 'https://www.google.co.uk/'

export class GooglePage implements WebPage {

    private searchBox;
    private iAmFeelingLuckyButton;

    constructor() {
        this.searchBox = $('[name="q"]');
        this.iAmFeelingLuckyButton = $$('[name="btnI"]');
    }

    async openWebPage() {
        await browser.url(url)
    }

    async searchForSomething(searchItem: string) {
        await this.searchBox.waitForExist();
        await this.searchBox.addValue(searchItem);
        await browser.keys('Enter');
    }

    getWebPageTitle() {
        return browser.getTitle();
    }

    async assertSearchResult(value: string) {
        const result = await $(`h3=${value}`);
        expect(await result.isDisplayed()).toEqual(true);
    }


}
