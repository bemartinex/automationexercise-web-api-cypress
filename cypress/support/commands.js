// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('efetuarLogin',(login, senha)=>{

    cy.get('[data-qa="login-email"]').type(login)
    cy.get('[placeholder="Password"]').type(senha)

    cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('checkoutDeslogado',(login, senha)=>{
    
    cy.contains('a','Proceed To Checkout').click()

    cy.contains('p', 'Register / Login account to proceed on checkout.').should('be.visible')
    cy.contains('u','Register / Login').click()

    cy.url().should('be.equal', 'https://automationexercise.com/login')

    cy.efetuarLogin(login,senha)

    cy.url().should('be.equal', 'https://automationexercise.com/')

    cy.contains('a','Cart').click()

    cy.url().should('be.equal', 'https://automationexercise.com/view_cart')

    cy.contains('a','Proceed To Checkout').click()

    cy.url().should('be.equal', 'https://automationexercise.com/checkout')

    cy.get('[id="address_delivery"]').should('exist')
})