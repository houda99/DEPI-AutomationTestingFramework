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
public class SortByInvalidPriceTest extends BaseTest {

    @Test(description = "Verify that the user cannot sort products by an invalid price")
    @Epic("Web interface")
    @Feature("product sorting features")
    @Story("Sort by Invalid Price")
    @Description("This test verifies that the user cannot sort products by an invalid price.")
    public void testSortByInvalidPrice() {
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

        // Sort by invalid price
        sortPage.sortByPrice("Invalid Price");

        // Verify sorting
        Assert.assertFalse(sortPage.isSortedByPrice("Invalid Price"), "Products are sorted by an invalid price.");
    }
}
