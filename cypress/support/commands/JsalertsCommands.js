Cypress.Commands.add("promptAccepting", () => {
  cy.window().then((win) => {
    cy.stub(win, "prompt").returns("John Doe");
    cy.get("button").contains("Prompt").click();
    cy.get("#demo").should("have.text", "Hello John Doe! How are you today?");
  });
});

Cypress.Commands.add("promptCancelling", () => {
  cy.window().then((win) => {
    cy.stub(win, "prompt").returns(null);
    cy.get("button").contains("Prompt").click();
    cy.get("#demo").should("have.text", "User cancelled the prompt.");
  });
});

Cypress.Commands.add("confirmBox", () => {
  cy.on("window:confirm", () => true);
  cy.get("button").contains("Confirm Box").click();
  cy.get("#demo").should("have.text", "You pressed OK!");
});

Cypress.Commands.add("alertBox", () => {
  cy.on("window:alert", (str) => {
    expect(str).to.equal("I am an alert box!");
  });
  cy.get("button").contains("Alert").click();
});
