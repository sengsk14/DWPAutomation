@Test
Feature: BPDTS Cities API test

  Description: Verification of BPDTS API level Cities tests

  Scenario Outline: Verify users in different cities using GET request
    When customer send GET request with different cities
    Then users in the respective "<cities>" displayed in the result
    Examples:
      | cities  |
      | London |
      | Kax |
      | Tonekābon |
      | Ban Chang |
      | Zhaizigou |
      | Leeds |
