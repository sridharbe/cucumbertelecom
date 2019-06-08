package cucumber1;

import java.util.List;

import org.openqa.selenium.By;

import cucumber.api.java.en.When;

public class AddCustomerSteps {
	
	@When("the user will fill all the details")
	public void the_user_will_fill_all_the_details(io.cucumber.datatable.DataTable dataTable) {
		Hooks.driver.findElement(By.xpath("//label[text()='Done']")).click();
		List<String> id = dataTable.asList(String.class);
		Hooks.driver.findElement(By.id("fname")).sendKeys(id.get(0));
		Hooks.driver.findElement(By.id("lname")).sendKeys(id.get(1));
		Hooks.driver.findElement(By.id("email")).sendKeys(id.get(2));
		Hooks.driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(id.get(3));
		Hooks.driver.findElement(By.id("telephoneno")).sendKeys(id.get(4));

	}
	@When("the user clicks on submit button")
	public void the_user_clicks_on_submit_button() {
		Hooks.driver.findElement(By.name("submit")).click();
	}
	@When("the user clicks on reset button")
	public void the_user_clicks_on_reset_button() {
		Hooks.driver.findElement(By.className("alt")).click();
	}

}
