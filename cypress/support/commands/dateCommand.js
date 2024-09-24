Cypress.Commands.add("selectDate", () => {
  cy.get("#datepicker").click();
  cy.get("#ui-datepicker-div").contains("15").click();
});
