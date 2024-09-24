import { beforeEach } from "mocha";

describe("Country", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("should select a specific country when clicked", () => {
    cy.get("#country").select("germany");
  });
});
