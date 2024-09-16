describe('TAT Customer Service Center', () => {
  it('checks the application title', () => {
    cy.visit('src/index.html')
    cy.title().should('contain', 'TAT Customer Service Center')



  })
})