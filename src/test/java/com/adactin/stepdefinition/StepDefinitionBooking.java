package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.BookingPage;

import cucumber.api.java.en.*;

public class StepDefinitionBooking extends BaseClass {
	@When("^user enter firstname$")
	public void user_enter_firstname() throws Throwable {
		BookingPage bp= new BookingPage(driver);
		inputOnElement(bp.getfirstname(),"Maha");
	}

	@When("^user enter lastname$")
	public void user_enter_lastname() throws Throwable {
		BookingPage bp= new BookingPage(driver); 
		inputOnElement(bp.getlastname(),"Lakshmi");
	}

	@When("^user enter address$")
	public void user_enter_address() throws Throwable {
		BookingPage bp= new BookingPage(driver);
		inputOnElement(bp.getaddress(), "adayar,chennai");
	}

	@When("^user enter creditcardno$")
	public void user_enter_creditcardno() throws Throwable {
	    BookingPage bp= new BookingPage(driver);
	    inputOnElement(bp.getcreditcard(), "2345 5432 7654 8976");
	}

	@When("^user enter creditcardtype$")
	public void user_enter_creditcardtype() throws Throwable {
		BookingPage bp= new BookingPage(driver);
		dropdown(bp.getcredittype(),"text","VISA");
	}

	@When("^user enter expmon of creditcard$")
	public void user_enter_expmon_of_creditcard() throws Throwable {
		BookingPage bp= new BookingPage(driver);
		dropdown(bp.getexpmon(), "text","December" );
	}

	@When("^user enter expyear of creditcard$")
	public void user_enter_expyear_of_creditcard() throws Throwable {
		BookingPage bp= new BookingPage(driver);
		dropdown(bp.getexpyear(), "text", "2020");
		
	}

	@When("^user enter cvv$")
	public void user_enter_cvv() throws Throwable {
		BookingPage bp= new BookingPage(driver);
		inputOnElement(bp.getcvv(), "999");
	}

	@When("^user  booKnow button$")
	public void user_booKnow_button() throws Throwable {
		BookingPage bp= new BookingPage(driver); 
		clickOnElement(bp.getbooknow());
		Thread.sleep(8000);
	}

	@Then("^user click logout button$")
	public void user_click_logout_button() throws Throwable {
		BookingPage bp= new BookingPage(driver); 
		clickOnElement(bp.getlogout());
	}

	
	

}
