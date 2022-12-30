describe('Open page', () => {
	it('should load shop page', () => {
		cy.visit('/');
		cy.url().should('include', 'skleptest');
	});

	it('should click on Most Wanted button', () => {
		cy.visit('/');
		cy.get('.menu-item-object-product_cat a').contains('Most Wanted').click();
		cy.url().should('include', 'most-wanted');
		cy.get('.page-title').contains('Most Wanted');
	});
});
