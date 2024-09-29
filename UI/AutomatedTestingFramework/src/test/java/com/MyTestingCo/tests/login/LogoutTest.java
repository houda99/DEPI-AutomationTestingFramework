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
public class LogoutTest extends BaseTest {

    @Test(description = "Verify that a user can log out successfully")
    @Epic("Web interface")
    @Feature("login features")
    @Story("Logout")
    @Description("This test verifies that a user can successfully log out after logging in.")
    public void testLogout() {
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);

        // Perform login with valid credentials
        loginPage.login("standard_user", "secret_sauce");

        // Verify successful login
        Assert.assertTrue(productsPage.isProductsPageDisplayed(), "Products page is not displayed. Login might have failed.");

        // Perform logout
        productsPage.logout();

        // Verify that user is redirected to login page
        String expectedTitle = "Swag Labs";
        String actualTitle = driver.getTitle();
        Assert.assertTrue(actualTitle.contains(expectedTitle), "Logout failed or incorrect page title.");
    }
}
