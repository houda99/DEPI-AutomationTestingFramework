package com.MyTestingCo.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CheckoutPage {
    private WebDriver driver;

    // Locators
    private By firstNameField = By.id("first-name");
    private By lastNameField = By.id("last-name");
    private By zipCodeField = By.id("zip-code");
    private By checkoutButton = By.id("checkout-button");
    private By successMessage = By.cssSelector(".success-message"); // Update locator as needed

    // Constructor
    public CheckoutPage(WebDriver driver) {
        this.driver = driver;
    }

    // Page Actions
    public void enterFirstName(String firstName) {
        WebElement firstNameElement = driver.findElement(firstNameField);
        firstNameElement.clear();
        firstNameElement.sendKeys(firstName);
    }

    public void enterLastName(String lastName) {
        WebElement lastNameElement = driver.findElement(lastNameField);
        lastNameElement.clear();
        lastNameElement.sendKeys(lastName);
    }

    public void enterZIPCode(String zipCode) {
        WebElement zipCodeElement = driver.findElement(zipCodeField);
        zipCodeElement.clear();
        zipCodeElement.sendKeys(zipCode);
    }

    public void clickCheckout() {
        driver.findElement(checkoutButton).click();
    }

    public boolean isSuccessfulCheckout() {
        // Implementation to check if checkout was successful
        // You might need to check for a success message or a specific element on the page.
        return driver.findElement(successMessage).isDisplayed();
    }
}