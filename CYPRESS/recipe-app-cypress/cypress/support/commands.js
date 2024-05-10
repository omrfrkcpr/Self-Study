// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", () => {
  cy.url().should("include", "/");
  cy.get('[data-test="loginHeader"]').should("be.visible").contains("Recipe");
  cy.get('[data-test="loginName"]').should("be.visible").type("Anthony");
  cy.get('[data-test="loginPassword"]').should("be.visible").type("Clarusway");
  cy.get('[data-test="loginSubmit"]').should("be.visible").click();
  cy.url().should("include", "/home");
});
Cypress.Commands.add("home", () => {
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
