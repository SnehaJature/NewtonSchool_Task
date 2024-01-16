describe('Context API Demo', () => {
    it('Logs in and logs out', () => {
        cy.visit('/');
        cy.get('p').contains('Guest');

        cy.get('button').contains('Login').click();
        cy.get('p').contains('John');

        cy.get('button').contains('Logout').click();
        cy.get('p').contains('Guest');
    });
});
