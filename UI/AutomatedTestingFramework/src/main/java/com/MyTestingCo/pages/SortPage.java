package com.MyTestingCo.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class SortPage {
    private WebDriver driver;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement sortDropdown;

    public SortPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void sortByPrice(String price) {
        Select dropdown = new Select(sortDropdown);
        dropdown.selectByVisibleText(price);
    }

    public boolean isSortedByPrice(String price) {
        // Implement logic to verify if the products are sorted by the given price
        // For simplicity, we'll assume that the selected option in the dropdown matches the price
        Select dropdown = new Select(sortDropdown);
        String selectedOption = dropdown.getFirstSelectedOption().getText();
        return selectedOption.equals(price);
    }
}
