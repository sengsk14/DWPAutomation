package step_definitions;

import core.CoreFunctions;
import core.RunProperties;

import java.net.MalformedURLException;

/**
 * Created by senthil on 03/07/2020.
 */
public class BaseTest {

    public CoreFunctions cf;
    public RunProperties rp;

    public void setupTest() throws MalformedURLException {

        cf = new CoreFunctions();
        rp = new RunProperties();

    }

}
