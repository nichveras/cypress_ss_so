/// <reference types = "cypress"/>


describe('Teste funcional de Login Transportadora', () => {
    it('Deve realizar um login com sucesso', () => {
        cy.visit("https://souout-homolog.souenergy.com.br/")
        cy.get('#input-10').type("parthaghosh@gmail24s.xyz")
        cy.get('#input-13').type("*****")
        cy.get('.m-texto').click()   
        //Validação de Login
        cy.get('.v-toolbar__title').should('contain','Remessas da Transportadora')
        

                                                 
        
            
    });

});
