package com.MyTestingCo.pages;
import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
    private WebDriver driver;

    // Locators
    private By usernameField = By.id("user-name");
    private By passwordField = By.id("password");
    private By loginButton = By.id("login-button");
    private By errorMessage = By.cssSelector("h3[data-test='error']");

    // Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    // Page Actions with @Step Annotations
    @Step("Enter username: {username}")
    public void enterUsername(String username) {
        driver.findElement(usernameField).clear();
        driver.findElement(usernameField).sendKeys(username);
    }

    @Step("Enter password: {password}")
    public void enterPassword(String password) {
        driver.findElement(passwordField).clear();
        driver.findElement(passwordField).sendKeys(password);
    }

    @Step("Click on Login button")
    public void clickLogin() {
        driver.findElement(loginButton).click();
    }

    @Step("Perform login with username: {username} and password: {password}")
    public void login(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLogin();
    }

    @Step("Get error message text")
    public String getErrorMessage() {
        return driver.findElement(errorMessage).getText();
    }
}