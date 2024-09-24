Cypress.Commands.add("AllDaysSelection", () => {
  cy.get('input[type="checkbox"][value="sunday"]').check();
  cy.get('input[type="checkbox"][value="monday"]').check();
  cy.get('input[type="checkbox"][value="tuesday"]').check();
  cy.get('input[type="checkbox"][value="wednesday"]').check();
  cy.get('input[type="checkbox"][value="thursday"]').check();
  cy.get('input[type="checkbox"][value="friday"]').check();
  cy.get('input[type="checkbox"][value="saturday"]').check();
});
