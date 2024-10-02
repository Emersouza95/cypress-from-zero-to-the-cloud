Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (formParams = {}, validateNameBeforeClick = false) => {
    const defaultFormParams = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@fakeemail.com',
        textArea: 'Amazing work!'
    }

    const finalFormParams = { ...defaultFormParams, ...formParams }

    cy.get('#firstName').as('firstName').type(finalFormParams.firstName)
    cy.get('#lastName').as('lastName').type(finalFormParams.lastName)
    cy.get('#email').type(finalFormParams.email)
    cy.get('#open-text-area').type(finalFormParams.textArea)

    if (validateNameBeforeClick) {
        cy.get('@firstName').should('have.value', formParams.firstName)
        cy.get('@lastName').should('have.value', formParams.lastName)
    }
    cy.contains('button', 'Send').should('be.enabled').click()
})