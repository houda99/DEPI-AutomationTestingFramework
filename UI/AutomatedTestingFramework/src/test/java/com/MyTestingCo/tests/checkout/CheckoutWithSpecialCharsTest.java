package com.MyTestingCo.tests.checkout;

import com.MyTestingCo.base.BaseTest;
import com.MyTestingCo.pages.CheckoutPage;
import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.pages.ProductsPage;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.testng.Assert;
import org.testng.annotations.Test;

@Feature("Checkout Feature")
public class CheckoutWithSpecialCharsTest extends BaseTest {

    @Test(testName = "TC024 - Checkout with Special Characters", description = "Verify that a user can checkout with special characters.")
    @Epic("Web interface")
    @Story("Checkout with Special Characters")
    @Description("This test verifies that a user can checkout with special characters successfully.")
    public void testCheckoutWithSpecialChars() {
        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Perform login if not already logged in
        loginPage.login("standard_user", "secret_sauce");
        CheckoutPage checkoutPage = new CheckoutPage(driver);

        // Add a product to the cart
        productsPage.addProductToCart("Sauce Labs Onesie!");

        // Navigate to the checkout page
        driver.get(config.getCheckoutPageUrl()); // Replace with the checkout page URL

        // Enter checkout details with special characters
        checkoutPage.enterFirstName("John!");
        checkoutPage.enterLastName("Doe!");
        checkoutPage.enterZIPCode("12345!");

        // Perform checkout
        checkoutPage.clickCheckout();

        // Verify successful checkout
        Assert.assertTrue(checkoutPage.isSuccessfulCheckout(), "Checkout with special characters was not successful.");
    }

}