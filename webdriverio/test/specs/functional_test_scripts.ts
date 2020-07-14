import {WebPageFactory} from "test/page_objects/factory_pattern/WebPageFactory";
import {WebPage} from "test/page_objects/factory_pattern/WebPage";

const webPageFactory = new WebPageFactory();

describe('functional testing', () => {
    it('Google should return results', async () => {
        let googlePage: WebPage;
        googlePage = webPageFactory.getWebTestPage('google')
        await googlePage.openWebPage();
        await googlePage.searchForSomething('Football');
        await googlePage.assertSearchResult("Football - BBC Sport")
    });

    it('Webdriver IO should return results', async () => {
        let webdriverIOPage: WebPage;
        webdriverIOPage = webPageFactory.getWebTestPage('webdriverIo');
        await webdriverIOPage.openWebPage();
        await webdriverIOPage.searchForSomething('click');
        await webdriverIOPage.assertSearchResult('elementclick')
    });

    it('should return result using the lucky button', async () => {
        let googlePage: WebPage;
        googlePage = webPageFactory.getWebTestPage('google')
        await googlePage.openWebPage();
        await googlePage.searchUsingLuckyButton('Football')
        const title = await googlePage.getWebPageTitle();
        expect(title).toEqual('Football - BBC Sport');
    });

    it('Bing should return results', async () => {
        let bingPage: WebPage;
        bingPage = webPageFactory.getWebTestPage('bing')
        await bingPage.openWebPage();
        await bingPage.searchForSomething('Arsenal');
        await bingPage.assertSearchResult("Arsenal.com - Homepage")
    });

});
