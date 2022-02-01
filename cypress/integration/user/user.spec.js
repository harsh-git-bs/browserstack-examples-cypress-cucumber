/// <reference types ="cypress"/>

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

// TODO:
Then("I should see no image loaded", () => {
  //   let src =
  cy.get("img[alt='iPhone 12']").should("have.attr", "src");
  // expect(src).to.be.empty;
});

And("I click on {string} link", (link) => {
  cy.contains(link).click();
});

And("I press Log Out Button", () => {
  cy.get("#logout").click();
});

// TODO:
Then("I should see elements in list", () => {
  cy.get(".a-box-inner").should("have.length", 10);
});
