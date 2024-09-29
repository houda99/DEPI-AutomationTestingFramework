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
public class AddProductWithEmptyFieldToCartTest extends BaseTest {

    @Test(testName = "TC020 - Add Product to Cart with Empty Field", description = "Verify that a user cannot add a product with an empty field to the cart after logging in.")
    @Epic("Web interface")
    @Story("Add Product to Cart with Empty Field")
    @Description("This test verifies that a user cannot add a product to their cart with an empty field after logging in.")
    public void testAddProductWithEmptyFieldToCart() {
        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);

        // Perform login if not already logged in
        loginPage.login("standard_user", "secret_sauce");


        // Navigate to the products page
        driver.get(config.getProductsPageUrl());

        // Attempt to add a product with an empty field to the cart
        productsPage.addProductToCart("");

        // Verify that the product is not added to the cart
        Assert.assertFalse(productsPage.isProductInCart(""), "A product with an empty field was added to the cart.");
    }

}