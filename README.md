**Technology Used:**

1. RestAssured Java API
2. Cucumber Framework
3. Maven project

**Github repository:**

https://github.com/sengsk14/DWPAutomation.git

**Test Scenarios**

Two features to test all GET methods
-CitiesTest.feature:
1. Tested with different valid cities results and invalid city
-CitiesTest.feature:
1. Tested with different valid users results and invalid user
2. Tested entire user list
3. Tested instructions call

**Test Execution**

All feature files executed without errors and worked as expected.

**Steps to Run the Test suites**

-IDE Execution: Execute TestRunner file
-Maven command line Execution: mvn test -Dcucumber.options="--tags @Test"

**Steps to see the results using report.html**

-Cucumber Report @ target/cucumber-report/index.html
-Screenshot Report  @ Screenshots/TestExecutionReport.png
-Existing report uploaded along with project have latest successful report

