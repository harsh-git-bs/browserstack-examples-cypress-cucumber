/// <reference types ="cypress"/>
// require{ Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

Given("Browser is at Google Home page", function () {
  cy.visit("https://www.google.com");
});

When("The user enters 'browserstack' in search bar", () => {
  cy.get(".gLFyf").type("Browserstack{enter}");
});

Then("Links related to 'browserstack' are shown on results page", () => {
  cy.title().should("include", "Browserstack");
  cy.get("#search .yuRUbf .LC20lb").eq(0).click();
});
