import { beforeEach } from "mocha";
import { generateRandomNumber } from "../utils/generateRandomNumber";

describe("Pagination", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("should contain the the header message indicating Automation Testing process", () => {
    cy.get("h1").should("contain.text", "Automation Testing Practice");
  });

  it("should select all the checkboxes", () => {
    cy.paginationCheckBox();
  });

  it("should select the page3 from  given pagination numbers", () => {
    const paginationNumber = generateRandomNumber(4);
    cy.checkPagination(paginationNumber);
  });
});
