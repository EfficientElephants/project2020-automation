var assert = require("cucumber-assert");
module.exports = function() {
this.When(/^I see I am on the login page with "([^"]*)"$/, function(loginHeader, next) {
    var self = this;
    this.driver.get("https://project-2020.azurewebsites.net/#/");
    this.driver
      .findElement({ xpath: "/html/body/div/div/div/form/h1" })
      .getText()
      .then(function(text) {
        console.log(text);
        assert.equal(text, loginHeader, next, "Expected title to be " + loginHeader);
      })
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
    this.driver
      .findElement({ xpath: "/html/body/div/div/div[2]/div[1]/div[1]/h1" })
      .getText()
      .then(function(text) {
        console.log(text);
        assert.equal(text, welcomeMsg, next, "Expected title to be " + welcomeMsg);
      });
  });

  this.Then(/^I should see an error "([^"]*)"$/, function(errorMsg, next) {
    var self = this;
    this.driver
      .findElement({ xpath: "/html/body/div/div/div/p" })
      .getText()
      .then(function(text) {
        console.log(text);
        assert.equal(text, errorMsg, next, "Expected title to be " + errorMsg);
      });
  });
};