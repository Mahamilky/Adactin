package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.ConfirmationPage;

import cucumber.api.java.en.*;

public class StepDefinitionConfirmation extends BaseClass {
	@When("^user click select radio button$")
	public void user_click_select_radio_button() throws Throwable {
		ConfirmationPage cp = new ConfirmationPage(driver);
		clickOnElement(cp.getradiobtn());
	     
	}

	@Then("^user click continue button$")
	public void user_click_continue_button() throws Throwable {
		ConfirmationPage cp = new ConfirmationPage(driver);
		clickOnElement(cp.getcontinue());
	}


}
