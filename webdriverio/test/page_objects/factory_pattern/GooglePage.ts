import {WebPage} from "test/page_objects/factory_pattern/WebPage";

const url = 'https://www.google.co.uk/'

export class GooglePage implements WebPage {

    searchBox: any;
    luckyButton?: any;

    async openWebPage() {
        await browser.url(url);
        await browser.pause(100);
    }

    async searchForSomething(searchItem: string) {
        this.searchBox = await $('[name="q"]');
        await this.searchBox.waitForExist();
        await this.searchBox.addValue(searchItem);
        await browser.keys('Enter');
    }

    async searchUsingLuckyButton?(searchItem: string) {
        this.searchBox = await $('[name="q"]');
        await this.searchBox.waitForExist();
        await this.searchBox.addValue(searchItem);
        this.luckyButton = await $$('.UUbT9 center input');
        await browser.pause(500);
        await this.luckyButton[1].waitForEnabled();
        await this.luckyButton[1].click();
    }

    getWebPageTitle() {
        return browser.getTitle();
    }

    async assertSearchResult(value: string) {
        const result = await $(`h3=${value}`);
        expect(await result.isDisplayed()).toEqual(true);
    }
}
