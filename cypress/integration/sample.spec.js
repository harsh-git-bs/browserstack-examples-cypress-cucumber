/// <reference types ="cypress"/>

it("should navigate to google.com", () => {
  cy.visit("https://www.google.com");
  cy.get(".gLFyf").type("Browserstack{enter}");
  //   cy.get("h3.LC20lb.DKV0Md").click();
//   cy.contains("https://www.browserstack.com/").click();
});
