/// <reference types ="cypress"/>

const { AssertionError } = require("chai");
const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

Given("I navigate to website", () => {
  cy.visit("https://bstackdemo.com/signin");
});
And("I SignIn as {string} with {string} password", (username, password) => {
  cy.get("#username")
    .click()
    .type(username + "{enter}");
  cy.get("#password")
    .click()
    .type(password + "{enter}");
  cy.get("#login-btn").click();
});

And("I click on {string} link", (link) => {
  cy.contains(link).click();
});

Then("I should see Offer elements", () => {
  try {
    cy.get(".pt-6").should("have.length", 1);
  } catch (error) {
    throw new AssertionError("There are no offers in your region.");
  }
});
