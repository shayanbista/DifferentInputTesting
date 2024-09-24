import { beforeEach } from "mocha";

describe("Days selection", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("should select all the aviliable genders", () => {
    cy.AllDaysSelection();
  });

  it("should select a specific date", () => {
    cy.get('input[type="checkbox"][value="sunday"]').check();
  });
});
