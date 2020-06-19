import {WebdriverIOPage} from "test/page_objects/WebdriverIOPage";
import {GooglePage} from "test/page_objects/GooglePage";
import {WebPage} from "test/page_objects/WebPage";

export class WebPageFactory {

    public getWebTestPage(url: string): WebPage {
        switch (url) {
            case 'google':
                return new GooglePage();
            case 'webdriverIo':
                return new WebdriverIOPage();
            default:
                throw new Error('url is invalid')
        }
    }
}
