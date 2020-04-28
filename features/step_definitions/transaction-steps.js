var assert = require("cucumber-assert");

module.exports = function() {

    this.When(/^I click on the "([^"]*)" expense button$/, function (btnText, next) {
        var self = this;
        this.driver
          .findElement({ xpath: "/html/body/div/div/div[2]/div[3]/div[1]/div/button" })
        //   .getText()
        //   .then(function(text) {
        //     assert.equal(text, btnText, next, "Expected title to be " + btnText);
        //   })
          .click()
          .then(next);
      });

    this.When(/^I click on the "([^"]*)" income button$/, function (btnText, next) {
        var self = this;
        this.driver
          .findElement({ xpath: "/html/body/div/div/div[2]/div[3]/div[2]/div/button" })
          .click()
        //   .getText()
        //   .then(function(text) {
        //     assert.equal(text, btnText, next, "Expected title to be " + btnText);
        //  })
          .then(next);
      });

    this.When(/^the "([^"]*)" modal pops up$/, function (modalType, next) {
        var self = this;
        this.driver
        .findElement({ xpath: "/html/body/div[3]/div/div/div[1]/div" })
        .click()
        // .getText()
        // .then(function(text) {
        //   assert.equal(text, modalType, next, "Expected title to be " + modalType);
        // })
        .then(next);
      });

    this.When(/^I add the item "([^"]*)"$/, function (item, next) {
        var self = this;
        this.driver
          .findElement({ id: "formItem" })
          .sendKeys(item)
          .then(next);
      });

    this.When(/^I add the price "([^"]*)"$/, function (price, next) {
        var self = this;
        this.driver
          .findElement({ id: "formPrice" })
          .sendKeys(price)
          .then(next);
      });

    this.When(/^I choose the category "([^"]*)"$/, function (cat, next) {
        var self = this;
        this.driver
          .findElement({ id: "formCategory" })
          .click()
          .sendKeys(cat + "\n")
          .then(next);
      });

    this.When(/^I click the "([^"]*)" button$/, function (arg1, next) {
        var self = this;
        this.driver
        .findElement({ class: "modal-save-changes btn btn-primary" })
        .getText()
        .then(function(text) {
          console.log(text);
          assert.equal(text, btnText, next, "Expected title to be " + btnText);
        })
        .then(next);
      });

    this.Then(/^I should see the "([^"]*)" toast pop up$/, function (toastText, next) {
        var self = this;
        this.driver
        .findElement({ class: "toast-body" })
        .getText()
        .then(function(text) {
          console.log(text);
          assert.equal(text, toastText, next, "Expected title to be " + toastText);
        })
        .then(next);
      });

}