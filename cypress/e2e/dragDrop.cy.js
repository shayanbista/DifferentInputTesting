describe("Drag and Drop Test", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("should drag the element and drop it on the target", () => {
    cy.dragDrop();
  });
});
