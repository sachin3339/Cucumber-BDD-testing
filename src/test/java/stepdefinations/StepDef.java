package stepdefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {
	@Given("^User On Gmail click on Next check gmail title$")
	public void user_On_webapp() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:\\chromedriver.exe");

		WebDriver driver = new ChromeDriver();
		driver.get("https://www.gmail.com/");
		driver.manage().window().maximize();
		driver.findElement(By.id("identifierId")).sendKeys("Chen.LinUK@gmail.com");
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[@class='RveJvd snByac']")).click();
		Thread.sleep(2000);
		String at = driver.getTitle();
		String et = "gmail";
		driver.close();
		if (at.equalsIgnoreCase(et)) {
			System.out.println("Acceptance Testing Successfull");
		} else {
			System.out.println("Acceptance Testing Fails");
		}

	}

	@When("^I enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void i_enter_username_as_and_password_as(String arg1, String arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Enter the username and password in the fields");
	}

	@When("^filled all the required registration information$")
	public void i_filled_required_info() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Filled all information ");
	}

	@When("^I submit login page$")
	public void i_submit_login_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Clicked on submit button");
	}

	@Then("^confirmation email is sent$")
	public void i_redirect_to_userhome_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Confirmation email is sent");
	}

}
