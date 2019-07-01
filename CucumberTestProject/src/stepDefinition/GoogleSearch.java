package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class GoogleSearch {

	WebDriver driver;
	
	@Given("^Enter search term 'selenium' on Google App$")
	public void enter_search_term_selenium_on_Google_App() throws Throwable {
		driver= new ChromeDriver();					
	    driver.manage().window().maximize();			
	    driver.get("https://www.google.com/");
	    driver.findElement(By.name("q")).sendKeys("selenium");
	}

	@When("^Do search$")
	public void do_search() throws Throwable {
		driver.findElement(By.xpath("(//INPUT[@class='gNO89b'])[2]")).click();
	}

	@Then("^Validate the Google title for different search 'selenium - Google Search'$")
	public void validate_the_Google_title_for_different_search_selenium_Google_Search() throws Throwable {

		Assert.assertTrue(driver.getTitle().equalsIgnoreCase("selenium - Google Search"));
	}

	@Given("^Enter search term 'appium' on Google App$")
	public void enter_search_term_appium_on_Google_App() throws Throwable {
		driver= new ChromeDriver();					
	    driver.manage().window().maximize();			
	    driver.get("https://www.google.com/");
	    driver.findElement(By.name("q")).sendKeys("appium");
	}

	@Then("^Validate the Google title for different search 'appium - Google Search'$")
	public void validate_the_Google_title_for_different_search_appium_Google_Search() throws Throwable {

		Assert.assertTrue(driver.getTitle().equalsIgnoreCase("appium - Google Search"));
	}

	
	
	
	
}
