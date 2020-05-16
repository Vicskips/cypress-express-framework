describe("assert search result has correct content", () => {
  it("star wars url inside first result", () => {
    cy.visit("https://google.com");
    cy.get("input[name=q]").type("star wars{enter}");
    cy.get("div[class=g]:first cite").contains("www.starwars.com");
  });

  it("check for star wars in description", () => {
    cy.visit("https://google.com");
    cy.get("input[name=q]").type("star wars{enter}");
    cy.get("div[class=g]:first span[class=st]").contains("Star Wars");
  });
});
