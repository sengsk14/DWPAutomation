package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by senthil on 01/07/2020.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "features",
        glue={"step_definitions"},
        plugin = {"pretty","html:target/cucumber-report",
                "json:target/cucumber-reports/cucumber.json",
                "junit:target/cucumber-reports/cucumber.xml",},
        tags = {"@Test"}
)

public class TestRunner {
}
