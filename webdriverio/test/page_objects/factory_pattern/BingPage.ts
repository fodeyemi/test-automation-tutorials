import {WebPage} from "test/page_objects/factory_pattern/WebPage";

const url = 'https://www.bing.com/'

export class BingPage implements WebPage{

    searchBox: any;

   async openWebPage() {
        await browser.url(url)
    }

    async searchForSomething(searchItem: string) {
       this.searchBox = await $('[name="q"]');
        await this.searchBox.waitForExist();
       await this.searchBox.addValue(searchItem);
       await browser.keys('Enter');
   }

    getWebPageTitle() {
       return browser.getTitle();
    }
    async assertSearchResult(value: string) {
       console.log('bing page !!!!');
       const result = await $(`h2 > [href="#${value}"]`);
        expect(await result.isExisting()).toEqual(true);


    }

}
