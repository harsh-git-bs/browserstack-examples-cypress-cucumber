/// <reference types ="cypress"/>
// require{ Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

require("cypress-xpath");

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
And("I add two products to cart", () => {
  cy.get("#\\31 > .shelf-item__buy-btn").click();
  cy.get("div.float-cart__close-btn").click();
  cy.get("#\\32 > .shelf-item__buy-btn").click();
});
And("I click on Buy Button", () => {
  cy.get(".buy-btn").click();
});
And(
  "I enter shipping details {string}, {string}, {string}, {string} and {string}",
  (first, last, address, province, pincode) => {
    cy.get("#firstNameInput").type(first);
    cy.get("#lastNameInput").type(last);
    cy.get("#addressLine1Input").type(address);
    cy.get("#provinceInput").type(province);
    cy.get("#postCodeInput").type(pincode);
  }
);
And("I click on Checkout Button", () => {
  cy.get("#checkout-shipping-continue").click();
  cy.contains("Continue ").click();
});
And("I click on {string} link", (link) => {
  cy.contains(link).click();
});
Then("I should see elements in list", () => {
  cy.xpath("/html/body/div/main/div/div/div/div[2]/div/div[2]")
    .children("div")
    .should("have.length", 2);
  
});
