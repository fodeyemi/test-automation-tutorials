export interface WebPage {

    openWebPage();

    searchForSomething(searchItem: string);

    clickAnElement(selector: string);

    assertWebPageTitle();
}
