Cypress.Commands.add(
  "moveSlider",
  (selector, startPercentage, incrementPercentage) => {
    cy.get("#slider").as("slider").should("be.visible");

    cy.get("@slider")
      .find(".ui-slider-handle")
      .as("sliderHandle")
      .then(($handle) => {
        const initialPosition = $handle[0].getBoundingClientRect().left;

        cy.get("@sliderHandle").trigger("mousedown", { which: 1 });

        cy.get("@slider").trigger("mousemove", {
          clientX: initialPosition + 50,
        });

        cy.get("@sliderHandle").trigger("mouseup");

        cy.get("@sliderHandle").then(($handle) => {
          const newPosition = $handle[0].getBoundingClientRect().left;
          expect(newPosition).to.be.greaterThan(initialPosition);
        });
      });
  },
);
