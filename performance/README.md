Performance Testing
================

Overview
--------

This project contains performance tests for the Sauce demo application. The tests are written using [Testing Framework] and cover various aspects of performance, including [list specific areas of performance being tested].

Getting Started
---------------

* Clone the repository: `git clone https://github.com/[Your GitHub Username]/[Repository Name].git`
* Install dependencies: install jmeter 
* Run tests: open 

Test Suites
----------

To create a detailed performance test suite for the **SauceDemo** website using JMeter, the test cases will be divided into specific **test suites** based on major functionalities of the website, and the results will be reported in a structured format.

### Test Suite Overview

We'll group the test cases into different **Test Suites** for each key feature of SauceDemo:
1. **Authentication Suite**: Includes tests related to login and logout.
2. **Product Management Suite**: Tests the performance of viewing products and adding/removing items to/from the cart.
3. **Cart Management Suite**: Tests related to viewing, adding, and removing items in the cart.
4. **Checkout Suite**: Covers the checkout process, from inputting information to confirming the order.

Each test suite will contain multiple test cases with specific performance criteria (e.g., response time assertions). After each test run, JMeter will generate a report to store in the same folder.

---

### Test Suites and Test Cases for SauceDemo Website

---

#### 1. **Authentication Suite**

**Test Case 1.1**: Login Performance Test
- **Purpose**: Ensure the login page responds in a timely manner when valid credentials are provided.
- **Steps**:
  1. Navigate to `/login`.
  2. POST credentials: 
     - Username: `standard_user`
     - Password: `secret_sauce`
  3. Assert response time is less than **2000 ms**.
  4. Assert that the "Products" page is loaded after login.
  
**Expected Result**: Login should complete in less than **2 seconds**, and the user should be redirected to the "Products" page.

---

**Test Case 1.2**: Logout Performance Test
- **Purpose**: Ensure the logout action completes efficiently.
- **Steps**:
  1. Navigate to `/logout`.
  2. Assert response time is less than **1000 ms**.
  3. Assert redirection to the login page.
  
**Expected Result**: Logout should occur in less than **1 second** and redirect to the login page.

---

#### 2. **Product Management Suite**

**Test Case 2.1**: Product List Load Test
- **Purpose**: Ensure that the product listing page responds quickly under normal load.
- **Steps**:
  1. Navigate to `/inventory.html`.
  2. Assert response time is less than **1500 ms**.
  3. Assert that the product list loads successfully.
  
**Expected Result**: The product page should load in less than **1.5 seconds**.

---

**Test Case 2.2**: Add Item to Cart Test
- **Purpose**: Ensure that adding an item to the cart happens within an acceptable response time.
- **Steps**:
  1. Simulate adding a product (e.g., "Sauce Labs Backpack") to the cart.
  2. POST the request to `/cart.html`.
  3. Assert response time is less than **1000 ms**.
  
**Expected Result**: The item should be added to the cart in less than **1 second**.

---

#### 3. **Cart Management Suite**

**Test Case 3.1**: View Cart Page Performance Test
- **Purpose**: Ensure the cart page responds efficiently when viewed.
- **Steps**:
  1. Navigate to `/cart.html`.
  2. Assert response time is less than **1500 ms**.
  
**Expected Result**: The cart page should load in less than **1.5 seconds**.

---

**Test Case 3.2**: Remove Item from Cart Test
- **Purpose**: Ensure that removing an item from the cart completes quickly.
- **Steps**:
  1. Simulate removing an item from the cart.
  2. POST the request to `/cart.html`.
  3. Assert response time is less than **1000 ms**.
  
**Expected Result**: The item should be removed from the cart in less than **1 second**.

---

#### 4. **Checkout Suite**

**Test Case 4.1**: Checkout Step 1 (Information Input) Test
- **Purpose**: Ensure that the checkout information page performs well.
- **Steps**:
  1. Navigate to `/checkout-step-one.html`.
  2. Assert response time is less than **2000 ms**.
  
**Expected Result**: The checkout information page should load in less than **2 seconds**.

---

**Test Case 4.2**: Checkout Step 2 (Overview) Test
- **Purpose**: Ensure the checkout overview page responds quickly.
- **Steps**:
  1. Navigate to `/checkout-step-two.html`.
  2. Assert response time is less than **2000 ms**.
  
**Expected Result**: The overview page should load in less than **2 seconds**.

---

**Test Case 4.3**: Checkout Completion Test
- **Purpose**: Ensure the checkout completion step happens efficiently.
- **Steps**:
  1. Simulate completing the checkout process.
  2. Navigate to `/checkout-complete.html`.
  3. Assert response time is less than **2000 ms**.
  
**Expected Result**: Checkout completion should occur in less than **2 seconds**.



Performance Documentation
---------------------
--

### Reporting Results in JMeter

1. **Add a Listener** to Each Test Case:
   - Right-click on each **Thread Group** > **Add** > **Listener**.
   - Use **Summary Report**, **View Results in Table**, or **Aggregate Report** to generate detailed results.
   
2. **Save Results** Automatically:
   - Configure JMeter to save results in a CSV or HTML format.
   - Go to **File** > **Save As** and choose a location in the project folder to save the test results.

3. **Export Results as an HTML Report**:
   - JMeter can generate an HTML report that consolidates test results. To do this:
     - After running the test, go to **Run** > **Generate HTML Report**.
     - Save the report in your desired folder (e.g., `/TestResults/`).
     - Ensure each suite has a separate report for easy access.

---

### Example Folder Structure for Results:

```
/PerformanceTests/
    /AuthenticationSuite/
        LoginTest.jmx
        LogoutTest.jmx
        AuthenticationResults.html
    /ProductManagementSuite/
        ProductListLoadTest.jmx
        AddItemToCartTest.jmx
        ProductManagementResults.html
    /CartManagementSuite/
        ViewCartPageTest.jmx
        RemoveItemFromCartTest.jmx
        CartManagementResults.html
    /CheckoutSuite/
        CheckoutStep1Test.jmx
        CheckoutStep2Test.jmx
        CheckoutCompletionTest.jmx
        CheckoutResults.html
```
---
Troubleshooting
---------------

* [Common issues and solutions]

