describe("The user cannot submit the login form with invalid credentials", () => {
  it("should display an error message", () => {
    cy.intercept("POST", "/api/v1/social/auth/login").as("loginRequest");

    cy.visit("/");
    cy.get("#registerModal").should("be.visible");
    cy.wait(500);

    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginModal").should("be.visible").wait(500);

    cy.get("#loginEmail").type("jojojda@stud.noroff.no");
    cy.get("#loginPassword").type("assword");

    cy.get("#loginForm > .modal-footer > .btn-success")
      .should("be.visible")
      .click();
    cy.wait(500);

    cy.on("window:alert", () => {
      expect(true).to.be.true;
    });

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 401);
  });
});
