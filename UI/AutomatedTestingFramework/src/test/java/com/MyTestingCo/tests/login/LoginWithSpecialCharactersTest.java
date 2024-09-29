package com.MyTestingCo.tests.login;

import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.base.BaseTest;
import io.qameta.allure.*;
import org.testng.Assert;
import org.testng.annotations.Test;

@Epic("Login Functionality")
@Feature("User Login")
public class LoginWithSpecialCharactersTest extends BaseTest {
    @Severity(SeverityLevel.NORMAL)
    @Test(description = "Login with Special Characters Test", priority = 5)
    @Description("Verify that the user can login successfully with special characters in credentials.")
    @Story("Login with special characters in credentials")
    public void loginWithSpecialCharactersTest() {
       // Navigate to the login page
        driver.get(config.getBaseUrl());

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);

        // Perform login with special characters
        loginPage.login("standard_user!", "secret_sauce!");

        // Verify error message is displayed
        String expectedErrorMessage = "Epic sadface: Username and password do not match any user in this service";
        String actualErrorMessage = loginPage.getErrorMessage();
        Assert.assertEquals(actualErrorMessage, expectedErrorMessage, "Error message does not match expected.");
    }
}