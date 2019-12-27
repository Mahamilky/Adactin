package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.LoginPage;
import com.adactin.runner.Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionLogin extends BaseClass {
	public static WebDriver driver = Runner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	/*
	 * @Given("^User launch the browser$") public void user_launch_the_browser()
	 * throws Throwable { browserLaunch("chrome");
	 */
	@Given("^the user is loggedin the application$")
	public void the_user_is_loggedin_the_application() throws Throwable {
		System.out.println("user starts to login into the application");
	}

	@Given("^goes to landing page$")
	public void goes_to_landing_page() throws Throwable {
		System.out.println("user logged on");
	}

	@When("^user enter application url$")
	public void user_enter_application_url() throws Throwable {
		String url = FileReaderManager.getInstance().getcrInstance().getUrl();
		getUrl("url");

	}

	@When("^user enter \"([^\"]*)\" username$")
	public void user_enter_username(String arg1) throws Throwable {
		// LoginPage lp = new LoginPage(driver);

		inputOnElement(pom.getLp().getUserName(), arg1);
	}

	@When("^user enter \"([^\"]*)\" password$")
	public void user_enter_password(String arg2) throws Throwable {
		//LoginPage lp = new LoginPage(driver);
		inputOnElement(pom.getLp().getpassword(),arg2);

	}

	/*
	 * @When("^user enter valid username$") public void user_enter_valid_username()
	 * throws Throwable { LoginPage lp = new LoginPage(driver);
	 * inputOnElement(lp.getUserName(),"Mahamilky");
	 * 
	 * 
	 * }
	 * 
	 * @When("^user enter valid password$") public void user_enter_valid_password()
	 * throws Throwable { LoginPage lp = new LoginPage(driver);
	 * inputOnElement(lp.getpassword(),"hari.9500");
	 */

	@Then("^user verify the username in the homepage$")
	public void user_verify_the_username_in_the_homepage() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		clickOnElement(lp.getloginbtn());

	}

}
