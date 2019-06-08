@functional
Feature: to test mutliple values for adding tariff paln

@us1 
Scenario Outline: To test user is able to add plan 
    Given the user is on the telecom homepage
    And the user clicks on addtariff plans button
    When the user"<MR>""<FL>""<FI>""<SMS>""<LM>""<IM>""<SMP>" will fill all the valid details 
     And the user clicks on submit button
    Then the user should add the plan details
    
    Examples:
    |MR|FL|FI|SMS|LM|IM|SMP|
    |12|2|2|4|5|12|43|
    
    
    @us2
  Scenario: check the reset button
    Given the user must be on addtariff plan page
    When the user enter all the fields values
      | MR  |  12 |
      | FL  | 420 |
      | FI  | 420 |
      | SMS |  23 |
      | LM  | 123 |
      | IM  | 424 |
      | SMP |   1 |
    And the user clicks on reset button
    Then the user must not see any values in the fields