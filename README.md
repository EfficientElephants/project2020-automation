# Project2020 Automation
Testing hosted on: 
![LambdaTest Logo](https://www.lambdatest.com/static/images/logo.svg)
---

The structure of this repository is based off of LambdaTest's [NodeJS-Cucumber-Selenium](https://github.com/LambdaTest/NodeJs-Cucumber-Selenium) project. This testing project is designed to test EfficientElephants/project2020's beta version, hosted [here](https://project-2020.azurewebsites.net/#/).

We are utilizing Cucumber with Selenium and NodeJS for our testing automation for our front-end UI. Cucumber is a behavior-driven development testing framework, which we decided to use as it is clear and easy to understand, allows us to evaluate the logic in our testing and other scenarios quickly and efficiently should something fail, and it is effective. 

### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
2. Lambdatest Credentials
    * Set LambdaTest username and access key in environment variables. It can be obtained from [LambdaTest dashboard](https://automation.lambdatest.com/) 
    example:
    - For linux/mac
    ```
    export LT_USERNAME="YOUR_USERNAME"
    export LT_ACCESS_KEY="YOUR ACCESS KEY"
    
    ```
    - For Windows
    ```
    set LT_USERNAME="YOUR_USERNAME"
    set LT_ACCESS_KEY="YOUR ACCESS KEY"
    
    ```
3. Setup
    * Navigate to this cloned directory
    * Install project dependencies
    ```
    $ npm install
    ```
    * Update `*.conf.js` files inside the `conf/` directory with your LambdaTest Username and Access Key

### Running Tests
   * Run any scenario
   ```
   $ SCENARIO={filename.feature} npm run scenario
   ```
   * Test in Single
    ```
    $ npm run single
    ```
   * Test in Parallel
    ```
    $ npm run parallel
    ```

#####  Routing traffic through your local machine
- Set tunnel value to `true` in test capabilities
> OS specific instructions to download and setup tunnel binary can be found at the following links.
>    - [Windows](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+Windows)
>    - [Mac](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+MacOS)
>    - [Linux](https://www.lambdatest.com/support/docs/display/TD/Local+Testing+For+Linux)

### Important Note:
Some Safari & IE browsers, doesn't support automatic resolution of the URL string "localhost". Therefore if you test on URLs like "http://localhost/" or "http://localhost:8080" etc, you would get an error in these browsers. A possible solution is to use "localhost.lambdatest.com" or replace the string "localhost" with machine IP address. For example if you wanted to test "http://localhost/dashboard" or, and your machine IP is 192.168.2.6 you can instead test on "http://192.168.2.6/dashboard" or "http://localhost.lambdatest.com/dashboard".

## About LambdaTest

[LambdaTest](https://www.lambdatest.com/) is a cloud based selenium grid infrastructure that can help you run automated cross browser compatibility tests on 2000+ different browser and operating system environments. LambdaTest supports all programming languages and frameworks that are supported with Selenium, and have easy integrations with all popular CI/CD platforms. It's a perfect solution to bring your [selenium automation testing](https://www.lambdatest.com/selenium-automation) to cloud based infrastructure that not only helps you increase your test coverage over multiple desktop and mobile browsers, but also allows you to cut down your test execution time by running tests on parallel.

### Resources

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)
##### [CucumberJs Documentation](https://cucumber.io/docs)

 
