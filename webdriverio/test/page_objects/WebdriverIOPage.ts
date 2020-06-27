import {WebPage} from "test/page_objects/WebPage";

const url = 'https://webdriver.io/'

export class WebdriverIOPage implements WebPage {

    searchForSomething(searchItem: string) {
    }

    async openWebPage() {
        await browser.url(url);
    }

    getWebPageTitle() {
        return browser.getTitle();
    }

    assertSearchResult() {
    }
}
