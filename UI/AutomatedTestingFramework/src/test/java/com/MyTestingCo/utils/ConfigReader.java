package com.MyTestingCo.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {
    private Properties properties;

    public ConfigReader() {
        String propertyFilePath = "src/test/resources/config/config.properties";
        try (FileInputStream fis = new FileInputStream(propertyFilePath)) {
            properties = new Properties();
            properties.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Configuration file not found at " + propertyFilePath);
        }
    }

    // New method to get the products page URL
    public String getProductsPageUrl() {
        return properties.getProperty("productsPageUrl");
    }
    public String getCheckoutPageUrl() {
        return properties.getProperty("CheckoutPageUrl");
    }

    // Existing methods...

    public String getBaseUrl() {
        return properties.getProperty("baseUrl");
    }

    public String getBrowser() {
        return properties.getProperty("browser");
    }

    public long getImplicitWait() {
        return Long.parseLong(properties.getProperty("implicitWait"));
    }

    public long getPageLoadTimeout() {
        return Long.parseLong(properties.getProperty("pageLoadTimeout"));
    }
}