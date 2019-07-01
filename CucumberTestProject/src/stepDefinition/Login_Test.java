package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_Test {
	
	WebDriver driver;
	
	@Given("^Open the Firefox and launch the application$")
	public void open_the_Firefox_and_launch_the_application() throws Throwable {
		   driver= new ChromeDriver();					
	       driver.manage().window().maximize();			
	       driver.get("http://demo.guru99.com/v4");	
	       System.out.println("This Step open the Firefox and launch the application.");
	}

	@When("^Enter the Username and Password$")
	public void enter_the_Username_and_Password() throws Throwable {
		driver.findElement(By.name("uid")).sendKeys("username12");	
		Thread.sleep(3000);
	    driver.findElement(By.name("password")).sendKeys("password12");
		System.out.println("This step enter the Username and Password on the login page.");	
	}

	@Then("^Reset the credential$")
	public void reset_the_credential() throws Throwable {
		driver.findElement(By.name("btnReset")).click();	
		System.out.println("This step click on the Reset button.");	
	}

}
