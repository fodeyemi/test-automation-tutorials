import {WebdriverIOPage} from "test/page_objects/factory_pattern/WebdriverIOPage";
import {GooglePage} from "test/page_objects/factory_pattern/GooglePage";
import {WebPage} from "test/page_objects/factory_pattern/WebPage";
import {BingPage} from "test/page_objects/factory_pattern/BingPage";

export class WebPageFactory {

    public getWebTestPage(pageUnderTest: string): WebPage {
        switch (pageUnderTest) {
            case 'google':
                return new GooglePage();
            case 'webdriverIo':
                return new WebdriverIOPage();
            case 'bing':
                return new BingPage();
            default:
                throw new Error('Page is invalid')
        }
    }
}
