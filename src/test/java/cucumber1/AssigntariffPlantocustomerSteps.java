package cucumber1;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AssigntariffPlantocustomerSteps {
	
	@When("the user enter valid customer id")
	public void the_user_enter_valid_customer_id(io.cucumber.datatable.DataTable dataTable) {
		List<String> pc = dataTable.asList(String.class);
		Hooks.driver.findElement(By.id("customer_id")).sendKeys(pc.get(0));
	}
	@When("the user enter invalid customer id")
	public void the_user_enter_invalid_customer_id(io.cucumber.datatable.DataTable dataTable) {
		List<String> pc = dataTable.asList(String.class);
		Hooks.driver.findElement(By.id("customer_id")).sendKeys(pc.get(0));
	}
	@Then("the user must receive error message")
	public void the_user_must_receive_error_message() {
		Assert.assertTrue(Hooks.driver.findElement(By.tagName("h4")).isDisplayed());
	}
	@Then("the user must see the tariff plan details page")
	public void the_user_must_see_the_tariff_plan_details_page() {
		Assert.assertTrue(Hooks.driver.findElement(By.tagName("h2")).isDisplayed());
	}

}
