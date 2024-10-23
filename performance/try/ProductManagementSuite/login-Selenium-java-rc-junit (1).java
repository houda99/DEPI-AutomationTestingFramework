package com.example.tests;

import com.thoughtworks.selenium.Selenium;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import com.thoughtworks.selenium.webdriven.WebDriverBackedSelenium;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import java.util.regex.Pattern;
import static org.apache.commons.lang3.StringUtils.join;

public class Login {
	private Selenium selenium;

	@Before
	public void setUp() throws Exception {
		WebDriver driver = new ChromeDriver();
		String baseUrl = "https://www.blazedemo.com/";
		selenium = new WebDriverBackedSelenium(driver, baseUrl);
	}

	@Test
	public void testLogin() throws Exception {
		// Label: Test
		selenium.resizeWindow(838,451);
		selenium.open("https://www.saucedemo.com/inventory.html");
		selenium.click("id=add-to-cart-sauce-labs-backpack");
		selenium.click("css=a.shopping_cart_link");
		selenium.click("id=user-name");
		selenium.type("id=user-name", "standard_use");
		selenium.click("id=password");
		selenium.click("id=user-name");
		selenium.type("id=user-name", "standard_user");
		selenium.click("id=password");
		selenium.type("id=password", "secrewt_sauce");
		selenium.sendKeys("id=password", "${KEY_ENTER}");
		// selenium.typeSecret("id=password", "secrewt_sauce");
		selenium.click("css=div.login_password");
		selenium.click("css=div.login_password");
		selenium.doubleClick("css=div.login_password");
		selenium.click("id=password");
		selenium.click("id=password");
		selenium.doubleClick("id=password");
		// selenium.typeSecret("id=password", "secret_sauce");
		selenium.click("id=login-button");
		selenium.click("//*[text() = \"1\"]");
	}

	@After
	public void tearDown() throws Exception {
		selenium.stop();
	}
}
