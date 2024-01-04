/// <reference types="cypress" />

// import { faker } from '@faker-js/faker';

context('Automation Orange HRM Live', () => {

    //const firstName = faker.person.firstName();
    //const lastName = faker.person.lastName();

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
    })
    
    it('Login & Logout',() => {
        cy.wait(3000)
        cy.get('[class="oxd-userdropdown-name"]').click()
        cy.get('.oxd-userdropdown-link').contains('Logout').click()
        cy.get('.orangehrm-login-title').should('contain', 'Login')
    })

    it('Update Personal Details',() => {
        cy.wait(3000)
        cy.get('.oxd-main-menu-item--name').contains('My Info').click()
        cy.get('.orangehrm-tabs-item').contains('Personal Details').click()
        cy.get('[name="firstName"]').clear().type('Tono')
        cy.get('[name="lastName"]').clear().type('Jono')
        cy.get('.orangehrm-vertical-padding [type="submit"]').contains('Save').click()
        //cy.get('[type="submit"]').parent('.oxd-form-actions').parent('.oxd-form').parent('.orangehrm-vertical-padding').contains('Save').click()
        cy.reload()
        cy.wait(3000)
        cy.get('.oxd-userdropdown-name').should('contain', 'Tono Jono')
    })

    it('Update contact details',() => {
        cy.wait(3000)
        cy.get('.oxd-main-menu-item--name').contains('My Info').click()
        cy.get('.orangehrm-tabs-item').contains('Contact Details').click()
        cy.get('.oxd-label').contains('City').parent().siblings('div').find('input').clear().type('Bekasi')
        cy.get('.oxd-form-actions [type="submit"]').contains('Save').click()
        cy.get('.oxd-toast-content-text').should('contain', 'Successfully Updated')
    })
    
 })