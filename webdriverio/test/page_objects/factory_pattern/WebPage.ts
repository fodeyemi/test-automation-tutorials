export interface WebPage {

    readonly searchBox;

    readonly luckyButton?: any;

    openWebPage();

    searchUsingLuckyButton?(searchItem: string);

    searchForSomething(searchItem: string);

    getWebPageTitle();

    assertSearchResult(value: string);
}
