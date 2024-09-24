Cypress.Commands.add("doubleClick", () => {
  let valueToCopy = "";
  cy.get("#field1")
    .invoke("val")
    .then((value) => {
      valueToCopy = value;
      cy.log("Value to copy:", valueToCopy);

      cy.contains("button", "Copy Text")
        .dblclick()
        .then(() => {
          cy.get("#field2")
            .invoke("val")
            .then((value) => {
              cy.wait(200);
              expect(value).to.equal(valueToCopy);
            });
        });
    });
});
