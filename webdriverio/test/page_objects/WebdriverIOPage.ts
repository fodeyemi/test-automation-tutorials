import {WebPage} from "test/page_objects/WebPage";

const url = 'https://webdriver.io/'

export class WebdriverIOPage implements WebPage {

    searchForSomething(searchItem: string) {
    }

    clickAnElement(selector: string) {
    }

    openWebPage() {
        browser.url(url);
    }

    assertWebPageTitle() {
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')
    }
}
