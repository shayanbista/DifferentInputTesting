import { beforeEach } from "mocha";

describe("Gender selection", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("should select the male gender from the aviliable genders", () => {
    cy.get('input[name="gender"][value="male"]').click();
  });

  it("should select the female gender from the aviliable genders", () => {
    cy.get('input[name="gender"][value="female"]').click();
  });
});
