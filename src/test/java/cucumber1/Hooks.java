package cucumber1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static WebDriver driver;
	@Before
	public void bM1() {
		System.setProperty("webdriver.chrome.driver", "D:\\35340\\cucumber\\cucumber1\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/index.html");
		
	}
	@After
	public void aM1() {
	driver.quit();
	}
	
	

}
