/// <reference types = "cypress"/>


describe('Teste funcional de Login Sou Out', () => {
    it('Deve realizar um login com sucesso', () => {
        cy.visit("https://souout-homolog.souenergy.com.br/")
        cy.get('#input-10').type("Nicholas")
        cy.get('#input-13').type("*****")
        cy.get('.m-texto').click() 
        //Validação de Login 
        cy.get('.v-toolbar__title').should('contain','Dashboard')                                                 
        
            
    });

});
