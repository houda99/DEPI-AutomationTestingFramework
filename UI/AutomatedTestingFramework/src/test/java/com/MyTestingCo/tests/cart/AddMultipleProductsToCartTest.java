package com.MyTestingCo.tests.cart;

import com.MyTestingCo.base.BaseTest;
import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.pages.ProductsPage;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

@Feature("Cart Feature")
public class AddMultipleProductsToCartTest extends BaseTest {

    @Test(testName = "TC018 - Add Multiple Products to Cart", description = "Verify that a user can add multiple products to the cart after logging in.")
    @Epic("Web interface")
    @Story("Add Multiple Products to Cart")
    @Description("This test verifies that a user can add multiple products to their cart successfully after logging in.")
    public void testAddMultipleProductsToCart() {
        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);

        // Perform login if not already logged in
        loginPage.login("standard_user", "secret_sauce");


        // Navigate to the products page
        driver.get(config.getProductsPageUrl());

        // Add multiple products to the cart
        productsPage.addProductToCart("Sauce Labs Onesie");
        productsPage.addProductToCart("Sauce Labs Backpack");

        // Verify that both products are added to the cart
        Assert.assertTrue(productsPage.isProductInCart("Sauce Labs Onesie"), "Sauce Labs Onesie was not added to the cart.");
        Assert.assertTrue(productsPage.isProductInCart("Sauce Labs Backpack"), "Sauce Labs Backpack was not added to the cart.");
    }

}