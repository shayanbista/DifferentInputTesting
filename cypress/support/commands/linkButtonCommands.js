Cypress.Commands.add("validLinkButton", () => {
  const expectedUrl = "https://demo.opencart.com/";

  cy.visit("https://testautomationpractice.blogspot.com/");

  cy.window().then((win) => {
    cy.stub(win, "open").as("windowOpen");
  });

  cy.contains("button", "New Browser Window").click();

  cy.get("@windowOpen").should("be.calledWith", expectedUrl);
});
