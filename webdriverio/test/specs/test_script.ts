import {WebPageFactory} from "test/page_objects/WebPageFactory";
import {WebPage} from "test/page_objects/WebPage";

const webPageFactory = new WebPageFactory();

describe('test web pages', () => {
    it('webdriver io page should have the right title', () => {
        let webdriverIoPage: WebPage;
        webdriverIoPage = webPageFactory.getWebTestPage('webdriverIo');
        webdriverIoPage.openWebPage();
        const webdriverPageTitle = webdriverIoPage.getWebPageTitle();
        expect(webdriverPageTitle).toBe("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js");
    });

    it('google page should have the right title', () => {
        let googlePage: WebPage;
        googlePage = webPageFactory.getWebTestPage('google')
        googlePage.openWebPage();
        const googlePageTitle = googlePage.getWebPageTitle();
        expect(googlePageTitle).toBe("Google");
    });
})
