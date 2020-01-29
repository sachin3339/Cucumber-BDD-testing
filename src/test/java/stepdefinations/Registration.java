package stepdefinations;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="classpath:Test.feature"
,glue = "stepdefinations", 
plugin= {"html:target/test-report",
"junit:target/junit-xml-report.xml",
"json:target/json-report.json"})
public class Registration {
	
	
}