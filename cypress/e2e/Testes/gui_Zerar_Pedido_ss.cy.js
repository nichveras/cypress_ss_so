/// <reference types = "cypress"/>


describe('Teste funcional de Login Sou Serials', () => {
    it('Deve realizar um login com sucesso', () => {
        cy.viewport(1440, 900);
        cy.visit("https://ssfh-aws.souenergy.com.br/login")
        cy.get('#email').type("test")
        cy.get('#password').type('*****')
        cy.get('.btn').click()

        //Validação de Login 
        cy.get('h2').should('contain','Dashboard') 


        //Administração
        cy.get('[href="/pedidos-web"] > span').click()
        cy.get(':nth-child(1) > :nth-child(2) > #order').type('61000097')
        cy.get('.row > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Gerenciar
        cy.get(':nth-child(6) > :nth-child(1) > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Zerar Bipagem Total
        cy.get('.det-info > :nth-child(2) > .btn').click()
         

        // Aguarde 3 s
        cy.wait(3000); 

    });

});
