package cucumber1;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Paybillingsteps {

	@When("the user enter{string} the customerid")
	public void the_user_enter_the_customerid(String custid) {
		Hooks.driver.findElement(By.id("customer_id")).sendKeys(custid);
	}

	@Then("the user should navigate to details page{string}")
	public void the_user_should_navigate_to_details_page(String stat) {
		if(stat.contains("error")){
		Assert.assertTrue(Hooks.driver.findElement(By.tagName("h4")).isDisplayed());
		}
		else if(stat.contains("pass")){
		Assert.assertTrue(Hooks.driver.findElement(By.xpath("(//tbody//tr//td/b)[20]")).isDisplayed());
		}
	}

}
