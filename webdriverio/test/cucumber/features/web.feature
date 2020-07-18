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

  Scenario Outline: Display search results
    Given I open "<web_page>" page
    When I search for "<search_param>"
    Then the "<search_result>" should be displayed
    Examples:
      | web_page    | search_param | search_result          |
      | google      | Football     | Football - BBC Sport   |
      | webdriverIo | click        | elementclick           |
<<<<<<< HEAD
      # make test pass - you will need to update the css selector in the assertSearchResult implementation in BingPage
      | bing        | Arsenal      | Arsenal.com - Homepage |


  @skip()
  Scenario: Get to BBC page from google using lucky button
=======
      | bing        | Arsenal      | Arsenal.com - Homepage |

  Scenario Outline: Get to BBC page from google using lucky button
>>>>>>> 345cf21d006e4b1938f9083d993b9c23f0cf62fe
    Given I open "google" page
    When I search for "<search_param>" using the lucky button
    Then I should be navigated to the BBC website
      | expected_title   |
      | <expected_title> |
    Examples:
      | search_param | expected_title       |
      | Football     | Football - BBC Sport |
      | news         | Home - BBC News      |
      | health       | Health A to Z - NHS  |
