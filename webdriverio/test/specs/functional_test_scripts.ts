import {WebPageFactory} from "test/page_objects/WebPageFactory";
import {WebPage} from "test/page_objects/WebPage";

const webPageFactory = new WebPageFactory();

describe('functional testing', () => {
    it('should return results', async () => {
        let googlePage: WebPage;
        googlePage = webPageFactory.getWebTestPage('google')
        await googlePage.openWebPage();
        await googlePage.searchForSomething('Football');
        await googlePage.assertSearchResult("Football - BBC Sport")
    });

})
