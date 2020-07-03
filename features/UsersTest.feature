@Test
Feature: BPDTS Users API test

  Description: Verification of BPDTS API level Users tests

  Scenario: Verify entire Users using GET request
    When customer send GET request for all "users"
    Then entire list of "users" displayed in the result

  Scenario: Verify instructions using GET request
    When candidate send GET request for "instructions"
    Then the "instructions" displayed in the result

  Scenario Outline: Verify different Users using GET request
    When customer send GET request with different users
    Then respective "<user>" displayed in the result
    Examples:
      | user  |
      | 1 |
      | 500 |
      | 1000 |
      | 0 |
