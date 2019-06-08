package cucumber1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features",tags={},dryRun=false,glue="cucumber1",
plugin={"rerun:src\\main\\resources\\failed.txt","html:target"},monochrome=true)
public class TestRunner {
	
	}
