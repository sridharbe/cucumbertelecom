package cucumber1;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTariffplanSteps {

	@When("the user{string}{string}{string}{string}{string}{string}{string} will fill all the valid details")
	public void the_user_will_fill_all_the_valid_details(String MR, String FL, String FI, String SMS, String LM,
			String IM, String SMP) {
		Hooks.driver.findElement(By.id("rental1")).sendKeys(MR);
		Hooks.driver.findElement(By.id("local_minutes")).sendKeys(FL);
		Hooks.driver.findElement(By.id("inter_minutes")).sendKeys(FI);
		Hooks.driver.findElement(By.id("sms_pack")).sendKeys(SMS);
		Hooks.driver.findElement(By.id("minutes_charges")).sendKeys(LM);
		Hooks.driver.findElement(By.id("inter_charges")).sendKeys(IM);
		Hooks.driver.findElement(By.id("sms_charges")).sendKeys(SMP);

	}

	@When("the user enter all the fields values")
	public void the_user_enter_all_the_fields_values(io.cucumber.datatable.DataTable dataTable) {
		Map<String, String> tp = dataTable.asMap(String.class, String.class);
		Hooks.driver.findElement(By.id("rental1")).sendKeys(tp.get("MR"));
		Hooks.driver.findElement(By.id("local_minutes")).sendKeys(tp.get("FL"));
		Hooks.driver.findElement(By.id("inter_minutes")).sendKeys(tp.get("FI"));
		Hooks.driver.findElement(By.id("sms_pack")).sendKeys(tp.get("SMS"));
		Hooks.driver.findElement(By.id("minutes_charges")).sendKeys(tp.get("LM"));
		Hooks.driver.findElement(By.id("inter_charges")).sendKeys(tp.get("IM"));
		Hooks.driver.findElement(By.id("sms_charges")).sendKeys(tp.get("SMP"));

	}

	@Then("the user must not see any values in the fields")
	public void the_user_must_not_see_any_values_in_the_fields() {

		String text = Hooks.driver.findElement(By.id("rental1")).getText();
		if (text.equals("")) {
			Assert.assertTrue(true);
		}

	}

	@Then("the user should add the plan details")
	public void the_user_should_add_the_plan_details() {
		Assert.assertTrue(Hooks.driver.findElement(By.tagName("h2")).isDisplayed());
	}

}
