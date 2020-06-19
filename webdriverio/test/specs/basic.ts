import {WebPageFactory} from "test/page_objects/WebPageFactory";
import {WebPage} from "test/page_objects/WebPage";

describe('webdriver io page', () => {
    it('should have the right title', async () => {
        let webPageFactory = new WebPageFactory();
        let webdriverIoPage: WebPage;
        let googlePage: WebPage;
        webdriverIoPage = webPageFactory.getWebTestPage('webdriverIo')
        googlePage = webPageFactory.getWebTestPage('google')
        webdriverIoPage.openWebPage();
        googlePage.openWebPage();
    });
})
