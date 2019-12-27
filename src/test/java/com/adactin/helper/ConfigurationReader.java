package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	public static Properties ps;

	public ConfigurationReader() throws IOException {
		File f = new File("E:\\maha_project\\AdactinCucumber\\src\\test\\java\\com\\adactin\\properties\\configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		ps = new Properties();
		ps.load(fis);

	}

	public static String browsername() {
		String browsername = ps.getProperty("browserName");
		return browsername;

	}

	public static String getUrl() {
		String Url = ps.getProperty("Url");
		return Url;

	}
}
