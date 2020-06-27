import {WebPage} from "test/page_objects/WebPage";

const url = 'https://www.google.co.uk/'

export class GooglePage implements WebPage {

    private searchBox: any;
    private googleSearchButton: any;
    private iAmFeelingLuckyButton: any;
    private searchResults: any;

    constructor() {
        this.searchBox = $('[name="q"]');
        this.searchResults = $('.kp-blk.nGydZ.Wnoohf.OJXvsb');
        this.iAmFeelingLuckyButton = $$('[name="btnI"]');
        this.googleSearchButton = $('[jsname="VlcLAe"] .gNO89b');
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

    async assertSearchResult() {
        await this.searchResults.waitForExist();
    }


}
