@run
Feature: Web testing

  Scenario Outline: Web pages should open with the right title
    Given I open "<web_page>" page
    Then it should have "<expected_title>" as page title
    Examples:
      | web_page    | expected_title                                                                  |
      | google      | Google                                                                          |
      | webdriverIo | WebdriverIO · Next-gen browser and mobile automation test framework for Node.js |

  Scenario Outline: Display search results
    Given I open "<web_page>" page
    When I search for "<search_param>"
    Then the "<search_result>" should be displayed
    Examples:
      | web_page    | search_param | search_result        |
      | google      | Football     | Football - BBC Sport |
      | webdriverIo | click        | elementclick         |


  Scenario: Get to BBC page from google using lucky button
    Given I open "google" page
    When I search for "Football" using the lucky button
    Then I should be navigated to the BBC website
      | expected_title       |
      | Football - BBC Sport |
