// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    // const { username, password } = this.config;
    cy.visit('/p1');
    cy.contains('Log In');

    cy.get('.input1').type('p1');
    cy.get('.input2').type('p1');
    cy.get('.submit-wrapper').click();

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/p2');
    });
  });
});
