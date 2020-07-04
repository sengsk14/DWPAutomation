$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CitiesTest.feature");
formatter.feature({
  "line": 2,
  "name": "BPDTS Cities API test",
  "description": "\nDescription: Verification of BPDTS API level Cities tests",
  "id": "bpdts-cities-api-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify users in different cities using GET request",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "customer send GET request with different cities",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users in the respective \"\u003ccities\u003e\" displayed in the result",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;",
  "rows": [
    {
      "cells": [
        "cities"
      ],
      "line": 10,
      "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;1"
    },
    {
      "cells": [
        "London"
      ],
      "line": 11,
      "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;2"
    },
    {
      "cells": [
        "Kax"
      ],
      "line": 12,
      "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;3"
    },
    {
      "cells": [
        "Tonekābon"
      ],
      "line": 13,
      "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;4"
    },
    {
      "cells": [
        "Ban Chang"
      ],
      "line": 14,
      "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;5"
    },
    {
      "cells": [
        "Zhaizigou"
      ],
      "line": 15,
      "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;6"
    },
    {
      "cells": [
        "Leeds"
      ],
      "line": 16,
      "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Verify users in different cities using GET request",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "customer send GET request with different cities",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users in the respective \"London\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsCitiesTest.customer_send_GET_request_with_different_cities()"
});
formatter.result({
  "duration": 137882525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 25
    }
  ],
  "location": "BpdtsCitiesTest.users_in_the_respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 1470225812,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify users in different cities using GET request",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "customer send GET request with different cities",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users in the respective \"Kax\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsCitiesTest.customer_send_GET_request_with_different_cities()"
});
formatter.result({
  "duration": 497036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kax",
      "offset": 25
    }
  ],
  "location": "BpdtsCitiesTest.users_in_the_respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 62489646,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify users in different cities using GET request",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "customer send GET request with different cities",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users in the respective \"Tonekābon\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsCitiesTest.customer_send_GET_request_with_different_cities()"
});
formatter.result({
  "duration": 559354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tonekābon",
      "offset": 25
    }
  ],
  "location": "BpdtsCitiesTest.users_in_the_respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 66160580,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify users in different cities using GET request",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "customer send GET request with different cities",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users in the respective \"Ban Chang\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsCitiesTest.customer_send_GET_request_with_different_cities()"
});
formatter.result({
  "duration": 394143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ban Chang",
      "offset": 25
    }
  ],
  "location": "BpdtsCitiesTest.users_in_the_respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 58150167,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify users in different cities using GET request",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "customer send GET request with different cities",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users in the respective \"Zhaizigou\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsCitiesTest.customer_send_GET_request_with_different_cities()"
});
formatter.result({
  "duration": 299857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zhaizigou",
      "offset": 25
    }
  ],
  "location": "BpdtsCitiesTest.users_in_the_respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 50804134,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify users in different cities using GET request",
  "description": "",
  "id": "bpdts-cities-api-test;verify-users-in-different-cities-using-get-request;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "customer send GET request with different cities",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users in the respective \"Leeds\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsCitiesTest.customer_send_GET_request_with_different_cities()"
});
formatter.result({
  "duration": 333495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 25
    }
  ],
  "location": "BpdtsCitiesTest.users_in_the_respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 56270649,
  "status": "passed"
});
formatter.uri("UsersTest.feature");
formatter.feature({
  "line": 2,
  "name": "BPDTS Users API test",
  "description": "\nDescription: Verification of BPDTS API level Users tests",
  "id": "bpdts-users-api-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Verify entire Users using GET request",
  "description": "",
  "id": "bpdts-users-api-test;verify-entire-users-using-get-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "customer send GET request for all \"users\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "entire list of \"users\" displayed in the result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 35
    }
  ],
  "location": "BpdtsUsersTest.customerSendGETRequestForAll(String)"
});
formatter.result({
  "duration": 121220908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 16
    }
  ],
  "location": "BpdtsUsersTest.entireListOfDisplayedInTheResult(String)"
});
formatter.result({
  "duration": 77586807,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify instructions using GET request",
  "description": "",
  "id": "bpdts-users-api-test;verify-instructions-using-get-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "candidate send GET request for \"instructions\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the \"instructions\" displayed in the result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "instructions",
      "offset": 32
    }
  ],
  "location": "BpdtsUsersTest.candidateSendGETRequestFor(String)"
});
formatter.result({
  "duration": 51934501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "instructions",
      "offset": 5
    }
  ],
  "location": "BpdtsUsersTest.the_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 59132419,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify different Users using GET request",
  "description": "",
  "id": "bpdts-users-api-test;verify-different-users-using-get-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "customer send GET request with different users",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "respective \"\u003cuser\u003e\" displayed in the result",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "bpdts-users-api-test;verify-different-users-using-get-request;",
  "rows": [
    {
      "cells": [
        "user"
      ],
      "line": 18,
      "id": "bpdts-users-api-test;verify-different-users-using-get-request;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 19,
      "id": "bpdts-users-api-test;verify-different-users-using-get-request;;2"
    },
    {
      "cells": [
        "500"
      ],
      "line": 20,
      "id": "bpdts-users-api-test;verify-different-users-using-get-request;;3"
    },
    {
      "cells": [
        "1000"
      ],
      "line": 21,
      "id": "bpdts-users-api-test;verify-different-users-using-get-request;;4"
    },
    {
      "cells": [
        "0"
      ],
      "line": 22,
      "id": "bpdts-users-api-test;verify-different-users-using-get-request;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Verify different Users using GET request",
  "description": "",
  "id": "bpdts-users-api-test;verify-different-users-using-get-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "customer send GET request with different users",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "respective \"1\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsUsersTest.customer_send_GET_request_with_different_users()"
});
formatter.result({
  "duration": 349331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "BpdtsUsersTest.respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 444217601,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify different Users using GET request",
  "description": "",
  "id": "bpdts-users-api-test;verify-different-users-using-get-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "customer send GET request with different users",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "respective \"500\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsUsersTest.customer_send_GET_request_with_different_users()"
});
formatter.result({
  "duration": 405204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 12
    }
  ],
  "location": "BpdtsUsersTest.respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 90159253,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify different Users using GET request",
  "description": "",
  "id": "bpdts-users-api-test;verify-different-users-using-get-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "customer send GET request with different users",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "respective \"1000\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsUsersTest.customer_send_GET_request_with_different_users()"
});
formatter.result({
  "duration": 393349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 12
    }
  ],
  "location": "BpdtsUsersTest.respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 95214083,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify different Users using GET request",
  "description": "",
  "id": "bpdts-users-api-test;verify-different-users-using-get-request;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "customer send GET request with different users",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "respective \"0\" displayed in the result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsUsersTest.customer_send_GET_request_with_different_users()"
});
formatter.result({
  "duration": 311076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 12
    }
  ],
  "location": "BpdtsUsersTest.respective_displayed_in_the_result(String)"
});
formatter.result({
  "duration": 64055734,
  "status": "passed"
});
});