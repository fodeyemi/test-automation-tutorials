import {WebPage} from "test/page_objects/WebPage";
import * as assert from "assert";

const url = 'https://www.google.co.uk/'

export class GooglePage implements WebPage {

    private searchBox: any;
    private googleSearchButton: any;
    private iAmFeelingLuckyButton: any;
    private searchResults: any;

    constructor() {
        this.searchBox = $('[name="q"]');
        this.searchResults = $$('.LC20lb.DKV0Md');
        this.iAmFeelingLuckyButton = $$('[name="btnI"]');
        this.googleSearchButton = $('[jsname="VlcLAe"] .gNO89b');
    }

    clickAnElement(selector: string) {
    }

    async openWebPage() {
        await browser.url(url)
    }

    async searchForSomething(searchItem: string) {
        await this.searchBox.waitForExist();
        await this.searchBox.addValue(searchItem);
        await this.googleSearchButton.waitForEnabled();
        await this.googleSearchButton.click();
    }

    getWebPageTitle() {
        return browser.getTitle();
    }

    async assertSearchResult(value: string) {
        await this.searchResults[0].isExisting();
        const text = await this.searchResults[0].getText();
        assert(text, value);
    }


}
