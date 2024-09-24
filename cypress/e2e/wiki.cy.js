import { beforeEach } from "mocha";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("should search the element and first searched element should match with the searching one", () => {
    cy.validText();
  });

  it("should contain the searched element on anchor element", () => {
    cy.validAnchorTag();
  });

  it("should attempt to open the link when clicked on it ", () => {
    cy.validLink();
  });
});
