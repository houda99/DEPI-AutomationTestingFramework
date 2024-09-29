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
public class CheckoutWithMultipleProductsTest extends BaseTest {

    @Test(testName = "TC023 - Checkout with Multiple Products", description = "Verify that a user can checkout with multiple products.")
    @Epic("Web interface")
    @Story("Checkout with Multiple Products")
    @Description("This test verifies that a user can checkout with multiple products successfully.")
    public void testCheckoutWithMultipleProducts() {
        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);
        CheckoutPage checkoutPage = new CheckoutPage(driver);
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Perform login if not already logged in
        loginPage.login("standard_user", "secret_sauce");

        // Add multiple products to the cart
        driver.get(config.getProductsPageUrl());
        productsPage.addProductToCart("Sauce Labs Onesie");
        productsPage.addProductToCart("Sauce Labs Backpack");

        // Navigate to the checkout page
        driver.get(config.getCheckoutPageUrl()); // Replace with the checkout page URL



        // Enter checkout details
        checkoutPage.enterFirstName("John");
        checkoutPage.enterLastName("Doe");
        checkoutPage.enterZIPCode("12345");

        // Perform checkout
        checkoutPage.clickCheckout();

        // Verify successful checkout
        Assert.assertTrue(checkoutPage.isSuccessfulCheckout(), "Checkout with multiple products was not successful.");
    }

}