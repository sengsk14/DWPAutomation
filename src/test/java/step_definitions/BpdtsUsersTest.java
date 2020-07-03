package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by senthil on 02/07/2020.
 */
public class BpdtsUsersTest extends BaseTest{

    String response, responseAll, responseInst;

    @When("^customer send GET request with different users$")
    public void customer_send_GET_request_with_different_users() throws Throwable {

        setupTest();

    }

    @Then("^respective \"(.*?)\" displayed in the result$")
    public void respective_displayed_in_the_result(String arg1) throws Throwable {

        System.out.println("User Id : "+arg1);
        System.out.println("Base URI : "+rp.baseURI);
        response = cf.getRequestUser(rp.baseURI,"/user/"+arg1);
        cf.verifyResponse(response,"User_"+arg1,"");

    }

    @When("^candidate send GET request for \"([^\"]*)\"$")
    public void candidateSendGETRequestFor(String arg0) throws Throwable {

        setupTest();
        responseAll = cf.getRequestUser(rp.baseURI,arg0);

    }

    @Then("^the \"(.*?)\" displayed in the result$")
    public void the_displayed_in_the_result(String arg1) throws Throwable {

        cf.verifyResponse(responseAll,"Test"+arg1,"");

    }


    @When("^customer send GET request for all \"([^\"]*)\"$")
    public void customerSendGETRequestForAll(String arg0) throws Throwable {

        setupTest();
        responseInst = cf.getRequestUser(rp.baseURI,arg0);

    }

    @Then("^entire list of \"([^\"]*)\" displayed in the result$")
    public void entireListOfDisplayedInTheResult(String arg0) throws Throwable {

        cf.verifyResponse(responseInst,"All"+arg0,"");

    }

}
