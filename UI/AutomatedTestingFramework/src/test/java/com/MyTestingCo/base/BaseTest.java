package com.MyTestingCo.base;


import com.MyTestingCo.utils.ConfigReader;
import io.qameta.allure.Allure;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.ITestResult;
import org.testng.annotations.*;

import java.io.ByteArrayInputStream;
import java.time.Duration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BaseTest {
    protected WebDriver driver;
    protected ConfigReader config;
    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @BeforeClass
    @Parameters("browser")
    public void setUp(String browser) {
        logger.info("Setting up the WebDriver for browser: {}", browser);
        config = new ConfigReader();

        if (browser == null || browser.isEmpty()) {
            browser = config.getBrowser();
        }

        if (browser.equalsIgnoreCase("chrome")) {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        } else {
            System.out.println("Browser not supported. Defaulting to Chrome.");
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        }

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(config.getImplicitWait()));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(config.getPageLoadTimeout()));
    }

    @AfterMethod
    public void addScreenshotOnFailure(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            // Take screenshot and attach to Allure report
            TakesScreenshot ts = (TakesScreenshot) driver;
            byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
            Allure.addAttachment("Screenshot on Failure", new ByteArrayInputStream(screenshot));
        }
    }
    @AfterMethod
    public void addScreenshotOnSuccess(ITestResult result) {
        if (result.getStatus() == ITestResult.SUCCESS) {
            // Take screenshot and attach to Allure report
            TakesScreenshot ts = (TakesScreenshot) driver;
            byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
            Allure.addAttachment("Screenshot on sucess", new ByteArrayInputStream(screenshot));
        }
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            logger.info("Tearing down the WebDriver.");
            driver.quit();
        }
    }
}