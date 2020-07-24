export interface WebPage {

    readonly searchBox;

    readonly luckyButton?;

    readonly navigationLinks?;

    openWebPage();

    searchUsingLuckyButton?(searchItem: string);

    searchForSomething(searchItem: string);

    getWebPageTitle();

    assertSearchResult(value: string);

    clickOnWebElement?(value: string);

    clickOnWebElements?();
}
