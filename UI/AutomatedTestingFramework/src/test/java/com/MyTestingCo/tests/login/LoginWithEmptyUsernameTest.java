package com.MyTestingCo.tests.login;

import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.pages.ProductsPage;
import com.MyTestingCo.base.BaseTest;
import io.qameta.allure.*;
import org.testng.Assert;
import org.testng.annotations.Test;

@Epic("Login Functionality")
@Feature("User Login")
public class LoginWithEmptyUsernameTest extends BaseTest {
    @Severity(SeverityLevel.MINOR)
    @Test(description = "Login with Empty Username Test", priority = 3)
    @Description("Verify that the user cannot login with an empty username.")
    @Story("Login with empty username")
    public void loginWithEmptyUsernameTest() {
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);


        // Perform login with empty username
        loginPage.login("", "secret_sauce");

        // Verify error message is displayed
        String expectedErrorMessage = "Epic sadface: Username is required";
        String actualErrorMessage = loginPage.getErrorMessage();
        Assert.assertEquals(actualErrorMessage, expectedErrorMessage, "Error message does not match expected.");
    }
}