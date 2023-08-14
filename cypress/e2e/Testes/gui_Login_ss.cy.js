/// <reference types = "cypress"/>


describe('Teste funcional de Login Sou Serials', () => {
    it('Deve realizar um login com sucesso', () => {
        cy.visit("https://ssfh-aws.souenergy.com.br/login")
        cy.get('#email').type("Nicholas")
        cy.get('#password').type('*****')
        cy.get('.btn').click()

        //Validação de Login 
        cy.get('h2').should('contain','Dashboard') 

                                                      
        
            
    });

});
