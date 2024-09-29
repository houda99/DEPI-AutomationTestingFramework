package com.MyTestingCo.tests.cart;

import com.MyTestingCo.pages.ProductsPage;
import com.MyTestingCo.base.BaseTest;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

@Feature("Cart Feature")
public class AddInvalidProductToCartTest extends BaseTest {

    @Test(testName = "TC017 - Add Invalid Product to Cart", description = "Verify that a user cannot add an invalid product to the cart.")
    @Epic("Web interface")
    @Story("Add Invalid Product to Cart")
    @Description("This test verifies that a user cannot add an invalid product to their cart.")
    public void testAddInvalidProductToCart() {
        // Navigate to the products page
        driver.get(config.getProductsPageUrl());

        // Initialize Page Objects
        ProductsPage productsPage = new ProductsPage(driver);

        // Attempt to add an invalid product to the cart
        productsPage.addProductToCart("Invalid Product");

        // Verify that the product is not added to the cart
        Assert.assertFalse(productsPage.isProductInCart("Invalid Product"), "Invalid product was added to the cart.");
    }

}