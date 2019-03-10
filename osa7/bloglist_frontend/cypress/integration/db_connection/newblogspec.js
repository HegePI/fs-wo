describe('Uuden blogin luominen ', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/test/reset')
    const user = {
      'username': 'Heikki',
      'name': 'Hegenator',
      'password': 'Pulli'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
  })

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
  it('a new blog can be created', function() {
    cy.contains('new blog')
      .click()
    cy.get('#title')
      .type('Cypress on hyvä testaukseen')
    cy.get('#author')
      .type('Hegeluthor')
    cy.get('#url')
      .type('moro.com')
    cy.contains('luo uusi')
      .click()
  })
})
