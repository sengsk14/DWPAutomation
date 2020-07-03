package core;

import java.io.InputStream;
import java.util.Properties;

/**
 * Created by senthil on 01/07/2020.
 */
public class RunProperties {

    private static String PROP_FILE	= "";
    private static RunProperties runprop;
    public static String baseURI;
    public static String userContentLength;
    public static String cityContentLength;
    public static String user0ContentLength;
    public static String users;
    public static String city;
    private static String OS = System.getProperty("os.name").toLowerCase();

    public RunProperties() {
        try {
            System.out.println("Reading and loading Run Properties");

            String propFileName = "run.properties";

            InputStream is =  RunProperties.class.getClassLoader().getResourceAsStream(propFileName);

            Properties prop = new Properties();

            prop.load(is);

            RunProperties.baseURI = prop.getProperty("baseURI");
            RunProperties.userContentLength = prop.getProperty("userContentLength");
            RunProperties.cityContentLength = prop.getProperty("cityContentLength");
            RunProperties.user0ContentLength = prop.getProperty("user0ContentLength");
            RunProperties.users = prop.getProperty("users");
            RunProperties.city = prop.getProperty("city");

            is.close();

            System.out.println("Reading and loading Run Properties sucessful");

            System.out.println("Test Execution OS -> "+OS);

        } catch (Exception e) {

            System.out.println("Failed to read from " + PROP_FILE + " file Stack :" + e);

        }
    }

    public static RunProperties getRunProperties() {

        if (runprop == null) {

            runprop = new RunProperties();

        }
        return runprop;
    }
}
