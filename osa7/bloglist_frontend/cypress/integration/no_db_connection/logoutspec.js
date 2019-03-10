describe('logout', function() {
  it('logout button works', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Kirjautuminen')
    cy.get('#username')
      .type('Heikki')
    cy.get('#password')
      .type('Pulli')
    cy.contains('login')
      .click()
    cy.contains('Heikki logged in')
    cy.contains('Logout')
      .click()
    cy.contains('Kirjautuminen')
    cy.contains('login')

  })
})