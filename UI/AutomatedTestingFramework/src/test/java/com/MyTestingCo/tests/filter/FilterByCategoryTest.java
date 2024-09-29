package com.MyTestingCo.tests.filter;

import com.MyTestingCo.base.BaseTest;
import com.MyTestingCo.pages.FilterPage;
import com.MyTestingCo.pages.LoginPage;
import com.MyTestingCo.pages.ProductsPage;
import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.testng.Assert;
import org.testng.annotations.Test;

@Feature("Product Filtering Feature")
public class FilterByCategoryTest extends BaseTest {

    @Test(testName = "",description = "Verify that the user can filter products by category")
    @Epic("Web interface")
    @Feature("product filtering features")
    @Story("Filter by Category")
    @Description("This test verifies that the user can filter products by category successfully.")
    public void testFilterByCategory() {
        // Navigate to base URL
        driver.get(config.getBaseUrl());

        // Initialize Page Objects
        LoginPage loginPage = new LoginPage(driver);
        ProductsPage productsPage = new ProductsPage(driver);
        FilterPage filterPage = new FilterPage(driver);

        // Perform login with valid credentials
        loginPage.login("standard_user", "secret_sauce");

        // Verify successful login
        Assert.assertTrue(productsPage.isProductsPageDisplayed(), "Products page is not displayed. Login might have failed.");

        // Filter by category
        filterPage.filterByCategory("Name (A to Z)");

        // Verify filtering
        Assert.assertTrue(filterPage.isFilteredByCategory("Name (A to Z)"), "Products are not filtered by the specified category.");
    }
}
