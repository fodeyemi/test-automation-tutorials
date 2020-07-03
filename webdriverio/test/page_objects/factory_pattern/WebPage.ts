export interface WebPage {

    readonly searchBox;

    luckyButton?: any;

    openWebPage();

    searchUsingLuckyButton?(searchItem: string);

    searchForSomething(searchItem: string);

    getWebPageTitle();

    assertSearchResult(value: string);
}
