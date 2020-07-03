import {WebPageFactory} from "test/page_objects/factory_pattern/WebPageFactory";
import {GooglePage} from "test/page_objects/factory_pattern/GooglePage";

const webPageFactory = new WebPageFactory();

describe('functional testing', () => {
    it('should return results', async () => {
        let googlePage: GooglePage;
        googlePage = webPageFactory.getWebTestPage('google')
        await googlePage.openWebPage();
        await googlePage.searchForSomething('Football');
        await googlePage.assertSearchResult("Football - BBC Sport")
    });

})
