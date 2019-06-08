package cucumber1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@src\\main\\resources\\failed.txt",monochrome=true,plugin={"html:target"})
public class TestRerunner {

}
