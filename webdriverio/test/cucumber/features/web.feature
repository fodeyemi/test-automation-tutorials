@run
Feature: Web testing

  @skip()
  Scenario Outline: Web pages should open with the right title
    Given I open "<web_page>" page
    Then it should have "<expected_title>" as page title
    Examples:
      | web_page    | expected_title                                                                  |
      | google      | Google                                                                          |
      | webdriverIo | WebdriverIO · Next-gen browser and mobile automation test framework for Node.js |
      | bing        | Bing                                                                            |

  @skip()
  Scenario Outline: Display search results
    Given I open "<web_page>" page
    When I search for "<search_param>"
    Then the "<search_result>" should be displayed
    Examples:
      | web_page    | search_param | search_result          |
      | google      | Football     | Football - BBC Sport   |
      | webdriverIo | click        | elementclick           |
      | bing        | Arsenal      | Arsenal.com - Homepage |

  Scenario Outline: Get to web page from google using lucky button
    Given I open "google" page
    When I search for "<search_param>" using the lucky button
    Then I should be navigated to the expected website
      | expected_title   |
      | <expected_title> |
    Examples:
      | search_param | expected_title       |
      | Football     | Football - BBC Sport |
      | news         | Home - BBC News      |
      | health       | Health A to Z - NHS  |
