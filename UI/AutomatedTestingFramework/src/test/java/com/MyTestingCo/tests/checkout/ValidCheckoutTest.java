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
public class ValidCheckoutTest extends BaseTest {

    @Test(testName = "TC021 - Valid Checkout", description = "Verify that a user can checkout successfully.")
    @Epic("Web interface")
    @Story("Valid Checkout")
    @Description("This test verifies that a user can checkout successfully with valid information.")
    public void testValidCheckout() {
        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);

        // Perform login if not already logged in
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        loginPage.login("standard_user", "secret_sauce");
        CheckoutPage checkoutPage = new CheckoutPage(driver);

        // Add a product to the cart
        driver.get(config.getProductsPageUrl());
        productsPage.addProductToCart("Sauce Labs Onesie");

        // Navigate to the checkout page
        driver.get(config.getCheckoutPageUrl()); // Replace with the checkout page URL

        // Enter checkout details
        checkoutPage.enterFirstName("John");
        checkoutPage.enterLastName("Doe");
        checkoutPage.enterZIPCode("12345");

        // Perform checkout
        checkoutPage.clickCheckout();

        // Verify successful checkout
        Assert.assertTrue(checkoutPage.isSuccessfulCheckout(), "Checkout was not successful.");
    }

}