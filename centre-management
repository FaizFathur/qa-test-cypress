/// <reference types="cypress"/>

context('Centre Management',() =>{

    const emailHqAdmin1 = 'hqadminaccess1@littlelives.com';
    const emailHqAdmin2 = 'hqadminaccess2@littlelives.com';
    const emailHqAdmin3 = 'hqadminaccess3@littlelives.com';
    const emailHqAdmin4 = 'hqadminaccess4@littlelives.com';
    const emailCentreAdmin1 = 'centreadminaccess1@littlelives.com';
    const emailCentreAdmin2 = 'centreadminaccess2@littlelives.com';
    const password = 'M0dules@CL';

    beforeEach(() => {
        cy.visit('https://sv.staging.littlelives.com/login')
    })

    it('As HQ Admin Access 1 user should be able add new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin1);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // create new centre
        cy.get('.whitespace-nowrap').contains('Create new Centre').click();
        cy.get('.leading-none').should('contain', 'Create new centre');
    })

    it('As HQ Admin Access 1 user should be able update new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin1);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // update centre
        cy.get('[title="Bao centre"]').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').contains('Edit Info').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').should('contain', 'Save');
    })

    it('as HQ Admin Access 1 user should be able close new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin1);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // close centre
        cy.get('[title="Bao centre"]').click();
        cy.get('[id="resource_search_dropdown"]').click();
        cy.get('[id="dropdown-item-0"]').click();
        cy.get('.font-title').should('contain', 'Centre closure form');

    })

    it('As HQ Admin Access 2 user should be able add new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin2);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // create new centre
        cy.get('.leading-none').should('not.contain', 'Create new Centre');
    })

    it('As HQ Admin Access 2 user should be able update new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin2);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // update centre
        cy.get('[title="Bao centre"]').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').contains('Edit Info').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').should('contain', 'Save');
    })

    it('as HQ Admin Access 2 user should be able close new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin2);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // close centre
        cy.get('[title="Bao centre"]').click();
        cy.get('[id="resource_search_dropdown"]').click();
        cy.get('[id="dropdown-item-0"]').click();
        cy.get('.font-title').should('contain', 'Centre closure form');

    })

    it('As HQ Admin Access 3 user should be able add new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin3);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // create new centre
        cy.get('.leading-none').should('not.contain', 'Create new Centre');
    })

    it('As HQ Admin Access 3 user should be able update new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin3);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // update centre
        cy.get('[title="Bao centre"]').click();
        cy.get('.leading-6').contains('BSC Information').should('not.contain', 'Edit Info');
    })

    it('as HQ Admin Access 3 user should be able close new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin3);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // close centre
        cy.get('[title="Bao centre"]').click();
        cy.get('[class="flex items-center justify-between"]').should('not.contain', '[id="resource_search_dropdown"]');
    })

    it('As HQ Admin Access 4 user should be able add new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin4);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // create new centre
        cy.get('.leading-none').should('not.contain', 'Create new Centre');
    })

    it('As HQ Admin Access 4 user should be able update new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin4);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // update centre
        cy.get('[title="Bao centre"]').click();
        cy.get('.leading-6').contains('BSC Information').should('not.contain', 'Edit Info');
    })

    it('as HQ Admin Access 4 user should be able close new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailHqAdmin4);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // close centre
        cy.get('[title="Bao centre"]').click();
        cy.get('[class="flex items-center justify-between"]').should('not.contain', '[id="resource_search_dropdown"]');
    })

    it('As Centre Admin Access 1 user should be able add new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailCentreAdmin1);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // create new centre
        cy.get('.leading-none').should('not.contain', 'Create new Centre');
    })

    it('As Centre Admin Access 1 user should be able update new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailCentreAdmin1);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // update centre
        cy.get('[title="Tom Kindergarten Active"]').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').contains('Edit Info').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').should('contain', 'Save');
    })

    it('as HCentre Admin Access 1 user should be able close new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailCentreAdmin1);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // close centre
        cy.get('[title="Tom Kindergarten Active"]').click();
        cy.get('[id="resource_search_dropdown"]').click();
        cy.get('[id="dropdown-item-0"]').click();
        cy.get('.font-title').should('contain', 'Centre closure form');

    })


    it('As Centre Admin Access 2 user should be able add new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailCentreAdmin2);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // create new centre
        cy.get('.leading-none').should('not.contain', 'Create new Centre');
    })

    it('As Centre Admin Access 2 user should be able update new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailCentreAdmin2);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // update centre
        cy.get('[title="Bao centre"]').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').contains('Edit Info').click();
        cy.get('.leading-6').contains('BSC Information').siblings('div').get('[class="whitespace-nowrap w-fit mx-2"]').should('contain', 'Save');
    })

    it('as HCentre Admin Access 2 user should be able close new centre',() =>{
        //Login Page
        cy.get('[placeholder="Email"]').type(emailCentreAdmin2);
        cy.get('[placeholder="Password"]').type(password);
        cy.get('.whitespace-nowrap').contains('Sign in').click();
        cy.url().should('include', '/enrolment-dashboard');

        //Centre Management Page
        cy.get('.transition-all').contains('Centre Management').click();
        cy.url().should('include', '/centre-management');

        // close centre
        cy.get('[title="Bao centre"]').click();
        cy.get('[id="resource_search_dropdown"]').click();
        cy.get('[id="dropdown-item-0"]').click();
        cy.get('.font-title').should('contain', 'Centre closure form');

    })

})
