package core;


import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.util.Map;


import static net.javacrumbs.jsonunit.JsonAssert.assertJsonEquals;
import static net.javacrumbs.jsonunit.JsonAssert.when;
import static net.javacrumbs.jsonunit.core.Option.IGNORING_ARRAY_ORDER;
import static org.testng.Assert.assertEquals;

/**
 * Created by senthil on 01/07/2020.
 */
public class CoreFunctions {

    String responseBody;
    JsonArray responseJsonArr;
    JSONObject responseJsonObj;

    public String getRequestUser(String baseUri,String param) throws Exception {

        RestAssured.baseURI = baseUri;

        RequestSpecification testGetRequest = RestAssured.given();

        Response getResponse = testGetRequest.request(Method.GET, param);

        responseBody = getResponse.getBody().asString();

        System.out.println("Get Body Response: "+responseBody);

        verifyStatusCode(getResponse.getStatusCode(), param);

        verifyContentType(getResponse.header("Content-Type"));

        verifyConnection(getResponse.header("connection"));

        return responseBody;

    }

    public void verifyResponse(String responseBody, String filename, String type) throws Exception {

        if (type.equalsIgnoreCase("city") || filename.equalsIgnoreCase("Allusers")) {

            JsonParser parser = new JsonParser();
            JsonElement tradeElement = parser.parse(responseBody);
            responseJsonArr = tradeElement.getAsJsonArray();
            System.out.println("json: " + responseJsonArr);
            compareOutput(readJsonArrFile(filename), responseJsonArr);

        } else {

            JSONParser parser = new JSONParser();
            responseJsonObj = (JSONObject) parser.parse(responseBody);
            compareOutput(readJsonObjFile(filename), responseJsonObj);

        }
    }

    public void verifyStatusCode(int statusCode, String param){

        System.out.println("Status Code: "+statusCode);
        String[] s = param.split("/");

        if(s.length > 1) {
            if (s[2].equalsIgnoreCase("0")) {
                assertEquals(statusCode, 404);
            } else {
                assertEquals(statusCode, 200);
            }
        }else{
            assertEquals(statusCode, 200);
        }

    }

    public void verifyContentType(String contentType){

        System.out.println("Content Type: "+contentType);
        assertEquals(contentType, "application/json");

    }

    public void verifyConnection(String connection){

        System.out.println("Connection: "+connection);
        assertEquals(connection, "keep-alive");

    }

    public void verifyContentLength(String contentLength,String contLength){

        System.out.println("Content Length: "+contentLength);
        assertEquals(contentLength, contLength);

    }

    public JSONObject readJsonObjFile(String filename) throws Exception {

        JSONObject jsonObject = (JSONObject) readJSONSimple("src/test/resources/data/"+filename+".json");
        System.out.println(jsonObject);
        return jsonObject;

    }


    public JsonArray readJsonArrFile(String filename) throws Exception {

        JsonArray jsonObject = (JsonArray) readJsonSimple("src/test/resources/data/"+filename+".json");
        System.out.println(jsonObject);
        return jsonObject;

    }

    public Object readJsonSimple(String filename) throws Exception {

        FileReader reader = new FileReader(filename);
        JsonParser jsonParser = new JsonParser();
        return jsonParser.parse(reader);
    }

    public Object readJSONSimple(String filename) throws Exception {

        FileReader reader = new FileReader(filename);
        JSONParser jsonParser = new JSONParser();
        return jsonParser.parse(reader);
    }

    public void compareOutput(JsonArray actual, JsonArray expected ){

        assertJsonEquals(expected, actual,when(IGNORING_ARRAY_ORDER));

    }

    public void compareOutput(JSONObject actual, JSONObject expected ){

        assertJsonEquals(expected, actual,when(IGNORING_ARRAY_ORDER));

    }

}
