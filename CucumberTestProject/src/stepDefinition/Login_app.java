package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;

public class Login_app {

	WebDriver driver;
	@Given("^I open my application$")
	public void i_open_my_application() throws Throwable {
		driver= new ChromeDriver();					
	    driver.manage().window().maximize();			
	    driver.get("http://newtours.demoaut.com");
	}

	@Given("^I login with credentials \"(.*?)\" and \"(.*?)\"$")
	public void i_login_with_credentials(String username, String password) throws Throwable {
	    
		driver.findElement(By.name("userName")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
	}
	
	
}
