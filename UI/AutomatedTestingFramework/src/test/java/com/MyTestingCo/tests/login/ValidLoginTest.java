package com.MyTestingCo.tests.login;

import com.MyTestingCo.base.BaseTest;
import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.pages.ProductsPage;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.testng.Assert;
import org.testng.annotations.Test;

@Feature("Login Feature")
public class ValidLoginTest extends BaseTest {

    @Test(testName = "TC001 -",description = "Verify that a user can log in with valid credentials")
    @Epic("Web interface")
    @Feature("login features")
    @Story("Valid Login")
    @Description("This test verifies that a user can successfully log in with valid username and password.")
    public void testValidLogin() {
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);

        // Perform login with valid credentials
        loginPage.login("standard_user", "secret_sauce");

        // Verify successful login
        Assert.assertTrue(productsPage.isProductsPageDisplayed(), "Products page is not displayed. Login might have failed.");
    }
}