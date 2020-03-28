import "cypress-axe";

describe("Sample Test", () => {
  it("has no accessibility complaints when loaded", () => {
    cy.visit(`https://www.google.com`);

    cy.injectAxe();

    cy.checkA11y();
  });
});
