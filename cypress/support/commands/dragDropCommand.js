Cypress.Commands.add("dragDrop", () => {
  cy.get("#draggable").as("draggable");

  cy.get("#droppable").as("droppable");

  cy.get("@draggable")
    .trigger("mousedown", { which: 1 })
    .trigger("mousemove", { clientX: 200, clientY: 200 })
    .get("@droppable")
    .trigger("mousemove")
    .trigger("mouseup", { force: true });

  cy.get("@droppable")
    .should("have.class", "ui-state-highlight")
    .find("p")
    .should("have.text", "Dropped!");
});
