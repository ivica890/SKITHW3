import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/notInStockPOM/products.methods";

describe('template spec', () => {
    var login = new LoginMethods();
    var products = new ProductMethods();

    beforeEach(function () {
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login('icickovski@gmail.com', 'Bitola123');
        login.verifySuccessfullLogin();
    })

    it('User should not be able to add the item in basket', () => {
        products.addItemToBasket("Juice Shop Holographic");
        cy.get('.fa-3x.warn-notification').should('have.text', '0');
    })
})