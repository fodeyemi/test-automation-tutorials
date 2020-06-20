import {WebPage} from "test/page_objects/WebPage";

const url = 'https://www.google.co.uk/'

export class GooglePage implements WebPage {

    clickAnElement(selector: string) {
    }

    async openWebPage() {
        await browser.url(url)
    }

    searchForSomething(searchItem: string) {
    }

    getWebPageTitle() {
        return browser.getTitle();
    }

}
