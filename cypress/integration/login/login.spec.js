/// <reference types ="cypress"/>

const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

Given("I navigate to website", () => {
  cy.visit("https://bstackdemo.com");
});
And("I click on {string} link", (link) => {
  cy.contains(link).click();
});
And('I type {string} in "username"', (username) => {
  cy.get("#username")
    .click()
    .type(username + "{enter}");
});
And('I type {string} in "password"', (password) => {
  cy.get("#password")
    .click()
    .type(password + "{enter}");
});
And("I press Log In Button", () => {
  cy.get("#login-btn").click();
});
Then("I should see user {string} logged in", (username) => {
  cy.get(".username").should("have.text", username);
});

And("I press Log Out Button", () => {
  cy.get("#logout").click();
});

Then("I should see {string} as Login Error Message", (lockMessage) => {
  cy.get(".api-error").should("have.text", lockMessage);
});
