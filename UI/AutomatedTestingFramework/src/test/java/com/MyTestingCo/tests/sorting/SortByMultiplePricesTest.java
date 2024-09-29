package com.MyTestingCo.tests.sorting;

import com.MyTestingCo.base.BaseTest;
import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.pages.ProductsPage;
import com.MyTestingCo.pages.SortPage;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.testng.Assert;
import org.testng.annotations.Test;

@Feature("Product Sorting Feature")
public class SortByMultiplePricesTest extends BaseTest {

    @Test(description = "Verify that the user can sort products by multiple prices")
    @Epic("Web interface")
    @Feature("product sorting features")
    @Story("Sort by Multiple Prices")
    @Description("This test verifies that the user can sort products by multiple prices successfully.")
    public void testSortByMultiplePrices() {
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);
        SortPage sortPage = new SortPage(driver);

        // Perform login with valid credentials
        loginPage.login("standard_user", "secret_sauce");

        // Verify successful login
        Assert.assertTrue(productsPage.isProductsPageDisplayed(), "Products page is not displayed. Login might have failed.");

        // Sort by multiple prices
        sortPage.sortByPrice("Price (low to high)");
        // Add a delay to ensure the sorting is applied before the next sort
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        sortPage.sortByPrice("Price (high to low)");

        // Verify sorting
        Assert.assertTrue(sortPage.isSortedByPrice("Price (low to high)"), "Products are not sorted by the specified price.");
        Assert.assertTrue(sortPage.isSortedByPrice("Price (high to low)"), "Products are not sorted by the specified price.");
    }
}
