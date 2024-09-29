package com.MyTestingCo.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class FilterPage {
    private WebDriver driver;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement filterDropdown;

    public FilterPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void filterByCategory(String category) {
        Select dropdown = new Select(filterDropdown);
        dropdown.selectByVisibleText(category);
    }

    public boolean isFilteredByCategory(String category) {
        // Implement logic to verify if the products are filtered by the given category
        // For simplicity, we'll assume that the selected option in the dropdown matches the category
        Select dropdown = new Select(filterDropdown);
        String selectedOption = dropdown.getFirstSelectedOption().getText();
        return selectedOption.equals(category);
    }
}
