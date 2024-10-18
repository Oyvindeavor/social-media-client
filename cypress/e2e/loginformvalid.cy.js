describe("Login Functionality", () => {
  it("should log in with valid credentials", () => {
    cy.visit("/");
    cy.get("#registerModal").should("be.visible");
    cy.wait(500);

    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginModal").should("be.visible").wait(500);

    cy.get("#loginEmail").type("jojojda@stud.noroff.no");
    cy.get("#loginPassword").type("test123456");

    cy.get("#loginForm > .modal-footer > .btn-success")
      .should("be.visible")
      .click();
    cy.wait(500);

    cy.get(".sticky-top").contains("Logout").should("be.visible");
  });
});
