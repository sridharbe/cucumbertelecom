package practice;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Collection {

static WebDriver driver;
	
public static void main(String args[]) {
	System.setProperty("webdriver.chrome.driver", "D:\\35340\\cucumber\\cucumber1\\driver\\chromedriver.exe");

	driver=new ChromeDriver();
}
}
