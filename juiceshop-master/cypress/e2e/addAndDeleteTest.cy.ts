import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";

describe('template spec', () => {
    var login = new LoginMethods();
    var products = new ProductMethods();

    beforeEach(function () {
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login('icickovski@gmail.com', 'Bitola123');
        login.verifySuccessfullLogin();
    })

    it('User should be able to add item into basket', () => {
        cy.get('[aria-label="Add to Basket"]').first().click();
        cy.get('.fa-3x.warn-notification').should('have.text', '1');
        cy.get('[aria-label="Show the shopping cart"]').click();
        cy.get('[data-icon="trash-alt"]').click();
        cy.get('.fa-3x.warn-notification').should('have.text', '0');
    })
})