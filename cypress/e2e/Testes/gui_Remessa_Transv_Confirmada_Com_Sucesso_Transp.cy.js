/// <reference types = "cypress"/>


describe('Teste funcional de Login Transportadora', () => {
    it('Deve realizar um login com sucesso', () => {
        cy.visit("https://souout-homolog.souenergy.com.br/")
        cy.get('#input-10').type("iulyaermolaewa@email-temp.com")
        cy.get('#input-13').type("***8*")
        cy.get('.m-texto').click()   
        //Validação de Login
        cy.get('.v-toolbar__title').should('contain','Remessas da Transportadora')
        // Aguarde 2 s
        cy.wait(2000);      
        //Confirmação de Remessas
        cy.get('.v-overlay__scrim').click()
        //CLicando no Botão de confirmar Remessa
        cy.get(':nth-child(1) > .row > .col-sm-2.col-md-1 > div > .text-truncate').click()
        //Selecionando Placa
        cy.get(':nth-child(7) > .v-input > .v-input__control > .v-input__slot')
        .click({ force: true });

        cy.wait(2000); // Aguarde 2 s
        
        //Selecionando Placa
        cy.contains('PMJ8F10').click()

        //Selecionando Motorista 
        cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot')
        .click({ force: true });

        cy.wait(2000); // Aguarde 2 s

        cy.contains('PAULO SOUSA').click()

        //Confirmando 
        cy.get(':nth-child(3) > .row > :nth-child(1) > .navy--text').click()
        
        // Validação de Remessa Confirmada com Sucesso
        cy.get('.overflow-hidden > :nth-child(2) > .col > .v-snack > .v-snack__wrapper > .v-snack__content').should('contain','Remessa confirmada com sucesso.')

            
    });

});
