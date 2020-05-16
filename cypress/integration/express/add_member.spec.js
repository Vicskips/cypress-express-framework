describe("adding a member", () => {
  it("star wars url inside first result", () => {
    cy.visit("http://localhost:5678/");
    cy.get("input[name=name]").type("Spike Spiegel");
    cy.get("input[name=email]").type("spike@spiegel.com");
    cy.get("input[type=submit]").click();
  });
});
