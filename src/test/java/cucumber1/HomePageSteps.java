package cucumber1;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;

public class HomePageSteps {

	@Given("the user is on the telecom homepage")
	public void the_user_is_on_the_telecom_homepage() {

		Hooks.driver.manage().window().maximize();

	}

	@Given("the user clicks on addtariff plans button")
	public void the_user_clicks_on_addtariff_plans_button() {
		Hooks.driver.findElement(By.linkText("Add Tariff Plan")).click();
	}

	@Given("the user launches the browser")
	public void the_user_launches_the_browser() {
		Hooks.driver.manage().window().maximize();
	}

	@Given("the user clicks on addcustomer button")
	public void the_user_clicks_on_addcustomer_button() {
		Hooks.driver.findElement(By.linkText("Add Customer")).click();

	}

	@Given("the user must be on telecom home page")
	public void the_user_must_be_on_telecom_home_page() {

		Hooks.driver.manage().window().maximize();
	}

	@Given("the user clicks on addtariffplan to customer button")
	public void the_user_clicks_on_addtariffplan_to_customer_button() {
		Hooks.driver.findElement(By.linkText("Add Tariff Plan to Customer")).click();
	}

	@Given("the user must be on addtariff plan page")
	public void the_user_must_be_on_addtariff_plan_page() {

		Hooks.driver.manage().window().maximize();
		Hooks.driver.findElement(By.linkText("Add Tariff Plan")).click();
	}
	@Given("the user must launch the home page")
	public void the_user_must_launch_the_home_page() {
	   Hooks.driver.manage().window().maximize();
	}
	@Given("the user clicks on paybilling button")
	public void the_user_clicks_on_paybilling_button() {
	   Hooks.driver.findElement(By.linkText("Pay Billing")).click();
	}
}
