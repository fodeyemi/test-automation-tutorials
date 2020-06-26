export interface WebPage {

    openWebPage();

    searchForSomething(searchItem: string);

    clickAnElement(selector: string);

    getWebPageTitle();

    assertSearchResult(value: string): any;
}
