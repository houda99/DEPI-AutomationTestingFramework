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
public class FilterByCategoryWithEmptyFieldTest extends BaseTest {

    @Test(description = "Verify that the user cannot filter products by category with an empty field")
    @Epic("Web interface")
    @Feature("product filtering features")
    @Story("Filter by Category with Empty Field")
    @Description("This test verifies that the user cannot filter products by category with an empty field.")
    public void testFilterByCategoryWithEmptyField() {
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

        // Filter by category with an empty field
        filterPage.filterByCategory("");

        // Verify filtering
        Assert.assertFalse(filterPage.isFilteredByCategory(""), "Products are filtered by an empty category field.");
    }
}
