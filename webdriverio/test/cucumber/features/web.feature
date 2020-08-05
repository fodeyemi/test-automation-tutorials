@run
Feature: Web testing

  @skip()
  Scenario Outline: Web pages should open with the right title
    Given Bob opens "<web_page>" page
    Then it should have "<expected_title>" as page title
    Examples:
      | web_page    | expected_title                                                                  |
      | google      | Google                                                                          |
      | webdriverIo | WebdriverIO · Next-gen browser and mobile automation test framework for Node.js |
      | bing        | Bing                                                                            |

  @skip()
  Scenario Outline: Display search results
    Given Bob opens "<web_page>" page
    When Bob searches for "<search_param>"
    Then the "<search_result>" should be displayed
    Examples:
      | web_page    | search_param | search_result          |
      | google      | Football     | Football - BBC Sport   |
      | webdriverIo | click        | elementclick           |
      | bing        | Arsenal      | Arsenal.com - Homepage |

  @skip()
  Scenario Outline: Get to web page from google using lucky button
    Given Bob opens "google" page
    When Bob searches for "<search_param>" using the lucky button
    Then Bob should be navigated to the expected website
      | expected_title   |
      | <expected_title> |
    Examples:
      | search_param | expected_title       |
      | Football     | Football - BBC Sport |
      | news         | Home - BBC News      |
      | health       | Health A to Z - NHS  |

  @skip()
  Scenario: Navigate Webdriver IO page
    Given Bob opens "webdriverIo" page
    When Bob navigates to "TypeScript Setup" page via "Docs"
    Then Bob should be navigated to the expected website
      | expected_title                 |
      | TypeScript Setup · WebdriverIO |

  @skip()
  Scenario: Click on all links on webdriver io page
    Given Bob opens "webdriverIo" page
    Then Bob should be able to click on all navigation menu links
      | links      | expected_title                                                                  |
      | Docs       | Getting Started · WebdriverIO                                                   |
      | API        | API Docs · WebdriverIO                                                          |
      | Help       | WebdriverIO · Next-gen browser and mobile automation test framework for Node.js |
      | Versions   | WebdriverIO Versions · WebdriverIO                                              |
      | Blog       | Blog · WebdriverIO                                                              |
      | Contribute | Contribute · WebdriverIO                                                        |

  Scenario: Bob using google
    Given Bob opens "google" page
    When Bob navigates to "About" page
    Then Bob should be able to scroll into "Follow us on:" section
    And the "More about us" link should be displayed
