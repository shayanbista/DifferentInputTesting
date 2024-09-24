describe("User Credentials", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });
  it("should fill in all the userInformation", () => {
    cy.userInformation();
  });
});
