/// <reference types="Cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it.only('Add items to cart', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=view-cart-btn]').click();
    cy.contains('2 Selected item')
    
  })

  it.only('Purchase items in cart', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=view-cart-btn]').click();
    
    cy.get('[data-cy=purchase-cart]').click();
    cy.get('[data-cy=show-recent-purchase]').click();
    cy.get('[data-cy=recent-purchase-2]').should('be.visible');
    cy.get('[data-cy=recent-purchase-3]').should('be.visible');
  })
})