package com.adactin.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.TakesScreenshot;

import com.adactin.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {
	@Before
	public void beforescenario(Scenario scenario) {
		System.out.println("Scenario Name: "+scenario.getName());
	}
	@After
	public void afterscenario(Scenario scenario) throws IOException {
		if (scenario.isFailed()) {
		String id = scenario.getId();
		System.out.println("scenario id is:"+id);
		Screenshot(id);
	}
	System.out.println("status:"+scenario.getStatus());	
	}
	 /*@Before("@BookNow")
	 public void beforelastscenario(Scenario scenario) {
		 System.out.println("=========this will execute before @BookNow Scenario============");
		 System.out.println("Scenario Name:"  +scenario.getName());*/
	 
	 }
