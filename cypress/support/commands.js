Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (customFormParams = {}, validateFormField = false) => {
    const defaultFormParams = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@fakemail.com',
        textArea: 'Amazing work!'
    }

    const finalFormParams = { ...defaultFormParams, ...customFormParams }

    cy.get('#firstName').as('firstName').type(finalFormParams.firstName)
    cy.get('#lastName').as('lastName').type(finalFormParams.lastName)
    cy.get('#email').type(finalFormParams.email)
    cy.get('#open-text-area').type(finalFormParams.textArea)

    if (validateFormField) {
        cy.get('@firstName').should('have.value', customFormParams.firstName)
        cy.get('@lastName').should('have.value', customFormParams.lastName)
    }
    cy.contains('button', 'Send').should('be.enabled').click()
})