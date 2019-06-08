package cucumber1;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;

public class AccessSteps {
	
	@Then("the user should see the customerid")
	public void the_user_should_see_the_customerid() {
		Assert.assertTrue(Hooks.driver.findElement(By.tagName("h3")).isDisplayed());
	}

}
