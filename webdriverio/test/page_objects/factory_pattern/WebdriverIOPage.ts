import {WebPage} from "test/page_objects/factory_pattern/WebPage";

const url = 'https://webdriver.io/'

export class WebdriverIOPage implements WebPage {

    searchBox;

    searchForSomething(searchItem: string) {
    }

    async openWebPage() {
        await browser.url(url);
    }

    getWebPageTitle() {
        return browser.getTitle();
    }

    assertSearchResult(value: string) {
    }
}
