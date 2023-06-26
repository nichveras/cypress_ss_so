/// <reference types = "cypress"/>


describe('Teste E2E - Realizando a criação de remessa com sucesso', () => {
    it('Fluxo da criação de remessa', () => {
            cy.visit("https://souout-homolog.souenergy.com.br/")
            cy.get('#input-10').type("Nicholas")
            cy.get('#input-13').type("123456")
            cy.get('.m-texto').click()   
            //Validação de Login 
            cy.get('.v-toolbar__title').should('contain','Dashboard')                                                       
            
            // Validação das Telas do Sou Out
            cy.get(':nth-child(2) > .v-list-item__content > .v-list-item__title').should('contain','Registros')
            cy.get(':nth-child(3) > .v-list-item__content > .v-list-item__title').should('contain','Recepção')
            cy.get(':nth-child(4) > .v-list-item__content > .v-list-item__title').should('contain','Transportadoras')
            cy.get(':nth-child(6) > .v-list-item__content > .v-list-item__title').should('contain','Coletas Agendadas')
            cy.get('.v-item-group > :nth-child(7)').should('contain','Motoristas')
            cy.get('.v-item-group > :nth-child(8)').should('contain','Veículos')
            cy.get('.v-item-group > :nth-child(9)').should('contain','Painéis')
            cy.get('.v-item-group > :nth-child(10)').should('contain','Usuários')
            cy.get('.v-item-group > :nth-child(11)').should('contain','Perfis')

            //Clicando em Coletas Agendadas 
            cy.get(':nth-child(6) > .v-list-item__content > .v-list-item__title').click()

            //Pesquisando por Transportadora
            cy.get('#input-225').type('transvale')
            //Pesquisando por Coleta
            cy.get(':nth-child(2) > .row > .v-input > .v-input__control > .v-input__slot').type('926')
            //Clicando em Filtrar 
            cy.get('.top').click()
            //Iniciando Embarque
            cy.get(':nth-child(1) > .row > .pl-0 > div > .text-truncate').click()
           



        });     
    });