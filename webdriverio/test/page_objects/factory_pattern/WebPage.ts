export interface WebPage {

    searchBox;

    openWebPage();

    searchForSomething(searchItem: string);

    getWebPageTitle();

    assertSearchResult(value: string);
}
