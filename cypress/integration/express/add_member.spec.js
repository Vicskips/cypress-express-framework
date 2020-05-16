const Chance = require("chance");

const ch = new Chance();

function getName() {
  return ch.first() + " " + ch.last();
}
function getEmail() {
  return ch.email();
}

describe("adding a member", () => {
  it("adding a members name and email", () => {
    cy.visit("http://localhost:5678/");

    cy.get("input[name=name]").type(getName());
    cy.get("input[name=email]").type(getEmail());
    cy.get("input[type=submit]").click();
  });
});
