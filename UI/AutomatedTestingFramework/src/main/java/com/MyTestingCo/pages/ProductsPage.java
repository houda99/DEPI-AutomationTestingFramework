package com.MyTestingCo.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ProductsPage {
    private WebDriver driver;

    // Locator for products title
    private By productsTitle = By.xpath("//span[@class='title']");
    private By logoutButton = By.id("logout_sidebar_link");

    // Constructor
    public ProductsPage(WebDriver driver) {
        this.driver = driver;
    }

    // Page Actions
    public String getPageTitle() {
        return driver.findElement(productsTitle).getText();
    }

    public boolean isProductsPageDisplayed() {
        return getPageTitle().equalsIgnoreCase("Products");
    }

    public void addProductToCart(String productName) {
        // Implementation to add a product to the cart
        // You might need to find the product element and perform a click action.
        WebElement productElement = driver.findElement(By.xpath("//div[contains(@class, 'inventory_item') and contains(., '" + productName + "')]"));
        productElement.click();
    }

    public void logout() {
        // Open the sidebar menu
        driver.findElement(By.id("react-burger-menu-btn")).click();
        // Click the logout link
        driver.findElement(logoutButton).click();
    }
    // Method to check if a product is in the cart
    public boolean isProductInCart(String productName) {
        // Implementation to check if a product is in the cart
        // You might need to find the cart element and check if the product is present.
        WebElement cartElement = driver.findElement(By.id("shopping_cart_container")); // Update locator as needed
        WebElement productInCartElement = cartElement.findElement(By.xpath(".//div[contains(@class, 'cart_item') and contains(., '" + productName + "')]"));
        return productInCartElement.isDisplayed();
    }

}