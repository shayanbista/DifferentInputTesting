Cypress.Commands.add("paginationCheckBox", () => {
  cy.get('#productTable tbody input[type="checkbox"]').check({ force: true });
  cy.get('#productTable tbody input[type="checkbox"]').each(($checkbox) => {
    cy.wrap($checkbox).should("be.checked");
  });
});

Cypress.Commands.add("checkPagination", (number) => {
  cy.get("#pagination a").contains(`${number}`).click();
  cy.get("#productTable tbody tr").its("length").should("be.greaterThan", 2);
});
