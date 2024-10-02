/// <reference types="cypress" />

describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })

  it('Ex 01 - fills in the required fields and submits the form', () => {
    cy.get('#firstName').type('Josh')
    cy.get('#lastName').type('Henkins')
    cy.get('#email').type('tatemail@testing.com')
    cy.get('#open-text-area').type('Amazing work! I am sure that I will be back here again.', { delay: 0 })
    cy.contains('button', 'Send').should('be.enabled').click()

    cy.get('.success').should('be.visible')
  })

  it('Ex 02 - displays an error message when submitting the form with an email with invalid formatting', () => {
    cy.get('#firstName').type('Josh')
    cy.get('#lastName').type('Henkins')
    cy.get('#email').type('tatemail@testing,com')
    cy.get('#open-text-area').type('Amazing work!')
    cy.contains('button', 'Send').should('be.enabled').click()

    cy.get('.error').should('be.visible')
  })

  it('Ex 03 - validades that the phone field only accepts numers', () => {
    cy.get('#phone').type('abcdef')

    cy.get('#phone').should('not.have.value')
  });

  it('Ex 04 - displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Send').click()

    cy.get('.error').should('be.visible')
  });

  it('Ex 05 - fills and clears the first name, last name, email, and phone fields', () => {
    cy.get('#firstName').as('firstName').type('Josh')
    cy.get('#lastName').as('lastName').type('Henkins')
    cy.get('#email').as('email').type('tatemail@testing,com')
    cy.get('#open-text-area').as('descriptionArea').type('Amazing work!')

    cy.get('@firstName').clear().should('be.empty')
    cy.get('@lastName').clear().should('be.empty')
    cy.get('@email').clear().should('be.empty')
    cy.get('@descriptionArea').clear().should('be.empty')
  });

  it('Ex 06 - displays an error message when submitting the form without filling the required fields', () => {
    cy.contains('button', 'Send').click()

    cy.get('.error').should('be.visible')
  });

  it('Ex 07.01 - successfully submits the form using a custom command default arguments', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  });

  it('Ex 07.02 - successfully submits the form using a custom command overwritting form data', () => {
    cy.fillMandatoryFieldsAndSubmit({ firstName: 'Mark', lastName: 'Collins' }, true)

    cy.get('.success').should('be.visible')
  });

  it('description', () => {

  });


})