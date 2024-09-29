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
public class CheckoutWithEmptyFieldTest extends BaseTest {

    @Test(testName = "TC025 - Checkout with Empty Field", description = "Verify that a user cannot checkout with an empty field.")
    @Epic("Web interface")
    @Story("Checkout with Empty Field")
    @Description("This test verifies that a user cannot checkout with an empty field.")
    public void testCheckoutWithEmptyField() {

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);
        CheckoutPage checkoutPage = new CheckoutPage(driver);
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Perform login if not already logged in
        loginPage.login("standard_user", "secret_sauce");


        // Add a product to the cart
        driver.get(config.getProductsPageUrl());
        productsPage.addProductToCart("Sauce Labs Onesie");



        // Navigate to the checkout page
        driver.get(config.getCheckoutPageUrl()); // Replace with the checkout page URL

        // Attempt checkout with empty fields
        checkoutPage.clickCheckout();

        // Verify that checkout is not successful
        Assert.assertFalse(checkoutPage.isSuccessfulCheckout(), "Checkout was successful with empty fields.");
    }

}