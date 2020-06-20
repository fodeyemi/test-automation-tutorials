import {WebPageFactory} from "test/page_objects/WebPageFactory";
import {WebPage} from "test/page_objects/WebPage";

describe('webdriver io page', () => {
    it('webdriver io page should have the right title', () => {
        let webPageFactory = new WebPageFactory();
        let webdriverIoPage: WebPage;
        webdriverIoPage = webPageFactory.getWebTestPage('webdriverIo')
        webdriverIoPage.openWebPage();
        const webdriverPageTitle = webdriverIoPage.getWebPageTitle();
        expect(webdriverPageTitle).toBe("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js")
    });

    it('google page should have the right title', () => {
        let webPageFactory = new WebPageFactory();
        let googlePage: WebPage;
        googlePage = webPageFactory.getWebTestPage('google')
        googlePage.openWebPage();
        const googlePageTitle = googlePage.getWebPageTitle();
        expect(googlePageTitle).toBe("Google")
    });
})
