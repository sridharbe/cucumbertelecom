Feature: To verify paybilling feature

  Scenario Outline: To test the customerid in billing field 
    Given the user must launch the home page 
    And the user clicks on paybilling button
    When the user enter"<customerid>" the customerid
    And the user clicks on submit button
    Then the user should navigate to details page"<status>"
    

    Examples: 
      |customerid|status|
      |928510|error message|
      |928500|pass|
