export interface WebPage {

    openWebPage();

    searchForSomething(searchItem: string);

    getWebPageTitle();

    assertSearchResult(value: string);
}
