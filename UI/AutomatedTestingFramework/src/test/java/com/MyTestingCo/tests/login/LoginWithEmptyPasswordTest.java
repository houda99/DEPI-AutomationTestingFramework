package com.MyTestingCo.tests.login;

import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.base.BaseTest;
import io.qameta.allure.*;
import org.testng.Assert;
import org.testng.annotations.Test;

@Epic("Login Functionality")
@Feature("User Login")
public class LoginWithEmptyPasswordTest extends BaseTest {
    @Severity(SeverityLevel.MINOR)
    @Test(description = "Login with Empty Password Test", priority = 4)
    @Description("Verify that the user cannot login with an empty password.")
    @Story("Login with empty password")
    public void loginWithEmptyPasswordTest() {
        // Navigate to the login page
        driver.get(config.getBaseUrl());

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);

        // Perform login with empty password
        loginPage.login("standard_user", "");

        // Verify error message is displayed
        String expectedErrorMessage = "Epic sadface: Password is required";
        String actualErrorMessage = loginPage.getErrorMessage();
        Assert.assertEquals(actualErrorMessage, expectedErrorMessage, "Error message does not match expected.");
    }
}