var assert = require("cucumber-assert");

module.exports = function() {

    this.When(/^I click on the "([^"]*)" expense button$/, function (btnText, next) {
        var self = this;
        this.driver
          .findElement({ xpath: "/html/body/div/div/div[2]/div[3]/div[1]/div/button" })
          .getText()
          .then(function(text) {
            assert.equal(text, btnText, next, "Expected title to be " + btnText);
          })
          .then(next);
      });

    this.When(/^I click on the "([^"]*)" income button$/, function (btnText, next) {
        var self = this;
        this.driver
          .findElement({ xpath: "/html/body/div/div/div[2]/div[3]/div[2]/div/button" })
          .getText()
          .then(function(text) {
            assert.equal(text, btnText, next, "Expected title to be " + btnText);
          })
          .then(next);
      });

    this.When(/^the "([^"]*)" modal pops up$/, function (modalType, next) {
        var self = this;
        this.driver
        .findElement({ xpath: "/html/body/div[3]/div/div/div[1]/div" })
        .getText()
        .then(function(text) {
          assert.equal(text, modalType, next, "Expected title to be " + modalType);
        })
        .then(next);
      });

    this.When(/^the "([^"]*)" modal pops up$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        next(null, 'pending');
      });

    this.When(/^I add the item "([^"]*)"$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        next(null, 'pending');
      });

    this.When(/^I add the price "([^"]*)"$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        next(null, 'pending');
      });

    this.When(/^I choose the category "([^"]*)"$/, function (arg1, next) {
        var self = this;
        this.driver
        .findElement({ xpath: "/html/body/div/div/div[2]/div[3]/div[2]/div/button" })
        .getText()
        .then(function(text) {
          console.log(text);
          assert.equal(text, btnText, next, "Expected title to be " + btnText);
        })
        .then(next);
      });

    this.When(/^I click the "([^"]*)" button$/, function (arg1, next) {
        // save button
        next(null, 'pending');
      });

    this.Then(/^I should see the "([^"]*)" toast pop up$/, function (arg1, next) {
        // Write code here that turns the phrase above into concrete actions
        next(null, 'pending');
      });

}