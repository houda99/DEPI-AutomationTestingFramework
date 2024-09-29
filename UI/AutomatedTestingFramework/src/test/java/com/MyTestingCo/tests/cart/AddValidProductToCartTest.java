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
public class AddValidProductToCartTest extends BaseTest {

    @Test(testName = "TC016 - Add Valid Product to Cart", description = "Verify that a user can add a valid product to the cart after logging in.")
    @Epic("Web interface")
    @Story("Add Valid Product to Cart")
    @Description("This test verifies that a user can add a valid product to their cart successfully after logging in.")
    public void testAddValidProductToCart() {
        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);

        // Perform login if not already logged in
        loginPage.login("standard_user", "secret_sauce");


        // Navigate to the products page
        driver.get(config.getProductsPageUrl());

        // Add a valid product to the cart
        productsPage.addProductToCart("Sauce Labs Onesie");

        // Verify that the product is added to the cart
        Assert.assertTrue(productsPage.isProductInCart("Sauce Labs Onesie"), "Valid product was not added to the cart.");
    }

}