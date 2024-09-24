describe("Double click", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("dshould contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("should double click the field and append text", () => {
    cy.doubleClick();
  });
});
