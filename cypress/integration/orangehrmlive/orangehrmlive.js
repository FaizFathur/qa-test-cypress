/// <reference types="cypress" />

//import {faker} from '@faker-js/faker';

context('Automation Orange HRM Live', () => {
    beforeEach(() => {

         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
        //  cy.get('#user-name').type('standard_user')
        //  cy.get('#password').type('secret_sauce')
        //  cy.get('#login-button').click()
    
    })
    
    it('Login & Logout',() => {
        cy.log('Berhasil');
    })

    it('Sample Test',() => {
        cy.log('Berhasil');
    })

    // it('Checkout 1 Product',() => {
    //      cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
    //      cy.get('#add-to-cart-sauce-labs-backpack').click()
    //      cy.get('#shopping_cart_container').click()

    //      //next page
    //      cy.url().should('include', '/cart')
    //      cy.get('#checkout').click()

    //      //next page
    //      cy.url().should('include', '/checkout-step-one')
    //      cy.get('#first-name').type('Qwertry')
    //      cy.get('#last-name').type('Asdfg')
    //      cy.get('#postal-code').type('12321')
    //      cy.get('#continue').click()

    //      //next page
    //      cy.url().should('include', '/checkout-step-two')
    //      cy.get('#finish').click()

    //      //next page
    //      cy.url().should('include', '/checkout-complete')
    //      cy.get('#checkout_complete_container').should('contain', 'THANK YOU FOR YOUR ORDER')

    // })

    

 })