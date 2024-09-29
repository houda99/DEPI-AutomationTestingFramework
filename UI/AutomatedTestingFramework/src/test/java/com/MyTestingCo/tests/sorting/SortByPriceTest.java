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
public class SortByPriceTest extends BaseTest {

    @Test(description = "Verify that the user can sort products by price")
    @Epic("Web interface")
    @Feature("product sorting features")
    @Story("Sort by Price")
    @Description("This test verifies that the user can sort products by price successfully.")
    public void testSortByPrice() {
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

        // Sort by price
        sortPage.sortByPrice("Price (low to high)");

        // Verify sorting
        Assert.assertTrue(sortPage.isSortedByPrice("Price (low to high)"), "Products are not sorted by the specified price.");
    }
}
