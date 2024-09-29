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
public class InvalidCheckoutTest extends BaseTest {

    @Test(testName = "TC022 - Invalid Checkout", description = "Verify that a user cannot checkout with invalid information.")
    @Epic("Web interface")
    @Story("Invalid Checkout")
    @Description("This test verifies that a user cannot checkout with invalid information.")
    public void testInvalidCheckout() {
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
        productsPage.addProductToCart("Invalid Product");

        // Navigate to the checkout page
        driver.get(config.getCheckoutPageUrl()); // Replace with the checkout page URL

        // Enter invalid checkout details
        checkoutPage.enterFirstName("Invalid");
        checkoutPage.enterLastName("Invalid");
        checkoutPage.enterZIPCode("Invalid");

        // Attempt checkout
        checkoutPage.clickCheckout();

        // Verify that checkout is not successful
        Assert.assertFalse(checkoutPage.isSuccessfulCheckout(), "Checkout was successful with invalid information.");
    }

}