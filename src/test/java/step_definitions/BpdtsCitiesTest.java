package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by senthil on 01/07/2020.
 */
public class BpdtsCitiesTest extends BaseTest{

    String response;

    @When("^customer send GET request with different cities$")
    public void customer_send_GET_request_with_different_cities() throws Throwable {

        setupTest();

    }

    @Then("^users in the respective \"(.*?)\" displayed in the result$")
    public void users_in_the_respective_displayed_in_the_result(String arg1) throws Throwable {

        System.out.println("City Name : "+arg1);
        System.out.println("Base URI : "+rp.baseURI);

        response = cf.getRequestUser(rp.baseURI,"city/"+arg1+"/users");
        cf.verifyResponse(response,arg1,rp.city);


    }


}
