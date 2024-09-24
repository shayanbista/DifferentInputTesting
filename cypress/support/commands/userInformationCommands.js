Cypress.Commands.add("userInformation", () => {
  cy.get("#name").type("Shayan Bista");
  cy.get("#email").type("shayan@gmail.com");
  cy.get("#phone").type("9841984112");
  cy.get("#textarea").type("jhamsikhel");
});
