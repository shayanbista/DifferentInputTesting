Cypress.Commands.add("validLink", () => {
  const searchTerm = "hello";
  const expectedUrl = "https://en.wikipedia.org/wiki/Hello";

  cy.get("#Wikipedia1_wikipedia-search-input").type(searchTerm);
  cy.get(".wikipedia-search-button").click();

  cy.request(expectedUrl).its("status").should("eq", 200);

  // Using invoke to remove target="_blank" and force the link to open in the same tab
  cy.get("#wikipedia-search-result-link a")
    .first()
    .invoke("removeAttr", "target")
    .click();

  // Use cy.origin() for cross-origin check
  cy.origin(
    "https://en.wikipedia.org",
    { args: { expectedUrl } },
    ({ expectedUrl }) => {
      cy.location("href").should("eq", expectedUrl);
    },
  );
});

Cypress.Commands.add("validText", () => {
  let text = "hello";
  cy.get("#Wikipedia1_wikipedia-search-input").type(text);
  cy.get(".wikipedia-search-button").click();
  cy.get("#wikipedia-search-result-link a")
    .first()
    .then(($el) => {
      const linkHref = $el.attr("href");
      const anchorText = $el.text().toLocaleLowerCase();
      expect(anchorText).to.equal(text);
    });
});

Cypress.Commands.add("validAnchorTag", () => {
  const searchTerm = "hello";

  cy.get("#Wikipedia1_wikipedia-search-input").type(searchTerm);

  cy.get(".wikipedia-search-button").click();

  cy.get("#wikipedia-search-result-link a")
    .first()
    .then(($el) => {
      const linkHref = $el.attr("href");
      const anchorText = $el.text().toLowerCase();
      expect(anchorText).to.include(searchTerm.toLowerCase());
    });
});
