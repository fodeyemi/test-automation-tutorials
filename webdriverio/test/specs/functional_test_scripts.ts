import {WebPageFactory} from "test/page_objects/factory_pattern/WebPageFactory";
import {GooglePage} from "test/page_objects/factory_pattern/GooglePage";
import {WebdriverIOPage} from "test/page_objects/factory_pattern/WebdriverIOPage";

const webPageFactory = new WebPageFactory();

describe('functional testing', () => {
    it.skip('Google should return results', async () => {
        let googlePage: GooglePage;
        googlePage = webPageFactory.getWebTestPage('google')
        await googlePage.openWebPage();
        await googlePage.searchForSomething('Football');
        await googlePage.assertSearchResult("Football - BBC Sport")
    });

    it.skip('Webdriver IO should return results', async () => {
        let webdriverIOPage: WebdriverIOPage;
        webdriverIOPage = webPageFactory.getWebTestPage('webdriverIo');
        await webdriverIOPage.openWebPage();
        await webdriverIOPage.searchForSomething('click');
        await webdriverIOPage.assertSearchResult('elementclick')
    });

    it('should return result using the lucky button', async () => {
        let googlePage: GooglePage;
        googlePage = webPageFactory.getWebTestPage('google')
        await googlePage.openWebPage();
        await googlePage.searchUsingLuckyButton('Football')
        const title = await googlePage.getWebPageTitle();
        expect(title).toEqual('Football - BBC Sport');
    });

})
