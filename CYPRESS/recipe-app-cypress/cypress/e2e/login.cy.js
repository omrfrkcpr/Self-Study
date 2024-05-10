describe("login page", () => {
  it("login test", () => {
    cy.visit("http://localhost:3001/");
    cy.get('[data-test="loginHeader"]').should("be.visible").contains("Recipe");
    cy.get('[data-test="loginName"]').should("be.visible").type("Anthony");
    cy.get('[data-test="loginPassword"]')
      .should("be.visible")
      .type("Clarusway");
    cy.get('[data-test="loginSubmit"]').should("be.visible").click();
    cy.url().should("include", "/home");
  });
});
