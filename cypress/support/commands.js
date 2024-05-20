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

    cy.get('[id="address_delivery"]').should('be.visible')
})