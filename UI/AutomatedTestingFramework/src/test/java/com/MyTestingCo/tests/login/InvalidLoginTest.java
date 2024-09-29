package com.MyTestingCo.tests.login;

import com.MyTestingCo.base.BaseTest;
import com.MyTestingCo.pages.LoginPage;
import io.qameta.allure.*;
import org.testng.Assert;
import org.testng.annotations.Test;

@Feature("Login Feature")
public class InvalidLoginTest extends BaseTest {
    @Severity(SeverityLevel.NORMAL)
    @Test(description = "Verify that an error message is displayed with invalid credentials")
    @Epic("Web interface")
    @Feature("login features")
    @Story("Invalid Login")
    @Description("This test verifies that an appropriate error message is displayed when a user attempts to log in with invalid credentials.")
    public void testInvalidLogin() {
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Initialize Page Object
        LoginPage loginPage = new LoginPage(driver);

        // Perform login with invalid credentials
        loginPage.login("standard_user", "wrong_password");

        // Verify error message is displayed
        String expectedErrorMessage = "Epic sadface: Username and password do not match any user in this service";
        String actualErrorMessage = loginPage.getErrorMessage();
        Assert.assertEquals(actualErrorMessage, expectedErrorMessage, "Error message does not match expected.");
    }
}