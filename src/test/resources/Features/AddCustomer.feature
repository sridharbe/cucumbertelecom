@regression
Feature: To Test Addtariff plan functionality
@us1 
 Scenario: To test customer id generation
    Given the user launches the browser
    And the user clicks on addcustomer button
    When the user will fill all the details
      | sridhar | deiva | sridhar@gmail.com | chennai | 9567019394 |
    And the user clicks on submit button
    Then the user should see the customerid


