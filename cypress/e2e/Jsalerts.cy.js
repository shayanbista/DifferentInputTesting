import { beforeEach } from "mocha";

describe("Js Alerts", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("handles alert box", () => {
    cy.alertBox();
  });

  it("handles confirm box - OK", () => {
    cy.confirmBox();
  });

  it("handles Prompt - entering name", () => {
    cy.promptAccepting();
  });

  it("handles Prompt - cancelling", () => {
    cy.promptCancelling();
  });
});
