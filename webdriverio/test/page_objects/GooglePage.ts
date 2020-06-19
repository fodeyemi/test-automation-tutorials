import {WebPage} from "test/page_objects/WebPage";

export class GooglePage implements WebPage {

    clickAnElement(selector: string) {
    }

    openWebPage() {

    }

    searchForSomething(searchItem: string) {
    }

    assertWebPageTitle() {
        expect(browser).toHaveTitle('Google')
    }

}
