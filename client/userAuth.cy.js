describe('User Authentication', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('#submit').click();
    cy.url().should('include', '/dashboard');
  });
});
