Feature: Web testing

  Scenario: Web pages should open with the right title
    Given I have a "google" page
    When I open web page
    Then it should have "Google" as page title
