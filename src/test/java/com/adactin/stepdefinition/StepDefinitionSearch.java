package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.SearchHotel;

import cucumber.api.java.en.*;

public class StepDefinitionSearch extends BaseClass {
	@When("^user select location$")
	public void user_select_location() throws Throwable {
		
		SearchHotel sh= new SearchHotel(driver);
		dropdown(sh.getLocation(), "text", "London");
	    
	}

	@When("^user select hotels$")
	public void user_select_hotels() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		dropdown(sh.gethotel(), "text", "Hotel Creek");
	}

	@When("^user select roomtype$")
	public void user_select_roomtype() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		dropdown(sh.getroomtype(), "text", "Super Deluxe");
	}

	@When("^user select roomno$")
	public void user_select_roomno() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		dropdown(sh.getroomno(), "text","4 - Four");
	}

	@When("^user select checkin date$")
	public void user_select_checkin_date() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		clickOnElement(sh.getcheckin());
		inputOnElement(sh.getcheckin(), "22/01/2020");
	}

	@When("^user select checkout date$")
	public void user_select_checkout_date() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		clickOnElement(sh.getcheckout());
		inputOnElement(sh.getcheckout(), "24/01/2020");
	}
	@When("^user select adultroom$")
	public void user_select_adultroom() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		dropdown(sh.getadultroom(), "text", "2 - Two");
	}

	@When("^user select childroom$")
	public void user_select_childroom() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		dropdown(sh.getchildroom(), "text", "2 - Two");
	}

	@Then("^user click submit button$")
	public void user_click_submit_button() throws Throwable {
		SearchHotel sh= new SearchHotel(driver);
		clickOnElement(sh.getsubmit());
		
	}




}
