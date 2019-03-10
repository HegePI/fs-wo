describe('Users', function() {
  it('Shows user view', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Kirjautuminen')
    cy.get('#username')
      .type('Heikki')
    cy.get('#password')
      .type('Pulli')
    cy.contains('login')
      .click()
    cy.contains('Heikki logged in')
    cy.contains('users')
      .click()
    cy.contains('Users')
    cy.contains('User name')
  })

})