@smoke
Feature: To add plan to customer 3rd feature

  Background: the user must be on telecom home page

  @us1 @sprint3 @Addplancustomer
  Scenario: To test valid customer id takes to next page
    And the user clicks on addtariffplan to customer button
    When the user enter valid customer id
      | 928500 |
    And the user clicks on submit button
    Then the user must see the tariff plan details page

  @us2 @sprint3
  Scenario: To test invalid customer id receives error message
    And the user clicks on addtariffplan to customer button
    When the user enter invalid customer id
      | 928501 |
    And the user clicks on submit button
    Then the user must receive error message
