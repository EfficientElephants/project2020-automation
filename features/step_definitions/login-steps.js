var assert = require("cucumber-assert");
var sleep = require('sleep');

module.exports = function() {

  this.When(/^I see I am on the login page with "([^"]*)"$/, function(loginHeader, next) {
    var self = this;
    this.driver.get("https://project-2020.azurewebsites.net/#/");
    this.driver
    .findElement({ xpath: "/html/body/div/div/div[2]/div[2]/form/h1" })
    .getText()
      .then(function(text) {
        console.log(text);
        assert.equal(text, loginHeader, next, "Expected title to be " + loginHeader);
      })
      .then(next);
  });

  this.When(/^I click the sign up link$/, function (next) {
    var self = this;
    this.driver
      .findElement({ xpath: "/html/body/div/div/div[2]/a" })
      //.getText()
      // .then(function(text) {
      //   console.log(text);
      //   assert.equal(text, signUp, next, "Expected title to be " + signUp);
      // })
      .click()
      .then(next);
  });

  this.When(/^I type in a first name "([^"]*)"$/, function (firstName, next) {
    var self = this;
    this.driver
      .findElement({ id: "firstNameInput" })
      .sendKeys(firstName + "\t")
      .then(next);
  });

  this.When(/^I type in a last name "([^"]*)"$/, function (lastName, next) {
    var self = this;
    this.driver
      .findElement({ id: "lastNameInput" })
      .sendKeys(lastName + "\t")
      .then(next);
    });

  this.When(/^I type in an email "([^"]*)"$/, function (email, next) {
    var self = this;
    this.driver
      .findElement({ id: "emailInput" })
      .sendKeys(email + "\t")
      .then(next);
    });

    this.When(/^I type in my new password  "([^"]*)"$/, function (password, next) {
      var self = this;
      this.driver
        .findElement({ id: "passwordInput" })
        .sendKeys(password + "\t")
        .then(next);
    });

  this.When(/^I click on the sign up button$/, function(next) {
    var self = this;
    this.driver
      .findElement({ xpath: "/html/body/div/div/div[2]/div[2]/form/div[5]/button" })
      .click()
      .then(next);
  });

  this.When(/^I type in username "([^"]*)"$/, function(username, next) {
    var self = this;
    this.driver
      .findElement({ id: "emailInput" })
      .sendKeys(username + "\t")
      .then(next);
  });

  this.When(/^I type in password "([^"]*)"$/, function(password, next) {
    var self = this;
    this.driver
      .findElement({ id: "passwordInput" })
      .sendKeys(password + "\n")
      .then(next);
  });

  this.When(/^I click on the login button$/, function(next) {
    var self = this;
    this.driver
      .findElement({ id: "login" })
      .click()
      .then(next);
  });

  this.Then(/^I should see I am on the dashboard page with "([^"]*)"$/, function(welcomeMsg, next) {
    var self = this;
    sleep.sleep(10);
    this.driver
      .findElement({ class: "dashboard-title" })
      .getText()
      .then(function(text) {
        console.log(text);
        console.log(`WELCOME MESSAGE: ${welcomeMsg}`);
        assert.equal(text, welcomeMsg, next, "Expected title to be " + welcomeMsg);
      });
  });

  this.Then(/^I should see I am on the dashboard page$/, function(next) {
    var self = this;
    sleep.sleep(10);
    var dashboardURL = "https://project-2020.azurewebsites.net/#/dashboard";
    this.driver
      .getCurrentUrl()
      // .getText()
      .then(function(url) {
        console.log(url);
        assert.equal(url, dashboardURL, next, "Expected URL to be " + dashboardURL);
      });
  });

  this.Then(/^I should see an error "([^"]*)"$/, function(errorMsg, next) {
    var self = this;
    this.driver
      .findElement({ xpath: "/html/body/div/div/div[2]/div[1]/div" })
      .getText()
      .then(function(text) {
        console.log(text);
        assert.equal(text, errorMsg, next, "Expected title to be " + errorMsg);
      });
  });
}