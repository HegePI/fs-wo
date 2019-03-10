describe('Log in', function() {
  it('can be logged in', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Kirjautuminen')
    cy.get('#username')
      .type('Heikki')
    cy.get('#password')
      .type('Pulli')
    cy.contains('login')
      .click()
    cy.contains('Heikki logged in')
  })
})