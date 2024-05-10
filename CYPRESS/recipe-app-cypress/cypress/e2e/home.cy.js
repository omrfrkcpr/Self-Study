describe("home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
    cy.viewport(1200, 1200);
  });
  it("home test", () => {
    cy.login();
    cy.get("[data-test='homeAbout']")
      .contains("About")
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/about");
    cy.get("[data-test='homeLogo']")
      .contains("<Clarusway/>")
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/home");
    cy.get("[data-test='recipeHeader']")
      .contains("Welcome to my")
      .should("be.visible");
    cy.get("[data-test='recipeSubHeader']")
      .contains("Food App")
      .should("be.visible");
    cy.get("[data-test='homeSearch']").type("r");
    cy.get("[data-test='homeSearchBtn']").click({ force: true });
    cy.get("[data-test='cardHeader']").should("be.visible");
    cy.get("[data-test='cardImage']").should("be.visible");
    cy.get("[data-test='cardBtn']")
      .should("be.visible")
      .first()
      .click({ force: true });
    cy.url().should("include", "/details");
  });
});
