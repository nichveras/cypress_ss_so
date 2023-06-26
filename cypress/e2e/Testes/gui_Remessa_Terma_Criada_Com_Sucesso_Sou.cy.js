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

            //Criando remessa

            //Clicando em Transportadora
            cy.contains('Transportadoras').click()
            cy.get(':nth-child(6) > :nth-child(6) > .font-weight-bold').click()
            //Clicando em Remessas
            cy.get('.pb-1.col-md-2 > .text-truncate').click()
            //Selecionando horário de inicio
            cy.get('.v-form > :nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot').type("17:00")
            //Selecionando horário final
            cy.get(':nth-child(1) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot').type("18:00")
            //Selecionando Doca
            cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
            .click({ force: true });
            
            // Aguarde 2 s
            cy.wait(2000);
  
            cy.get('.v-menu__content .v-list-item')
            .first()
            .click({ force: true });
            
            //Selecionando tipo de veículo
            cy.get('#input-1032').click({ force: true });
  
            cy.wait(2000); // Aguarde 2 s
  
            cy.contains('Carreta').click()

            //Clicando no modal calendário 
            cy.get('#input-1040').click()
            cy.get('tbody > :nth-child(2) > :nth-child(5) > .v-btn > .v-btn__content').click() 

            //Selecionando a data atual 
            const dataAtual = new Date();
            const dia = dataAtual.getDate().toString().padStart(2, '0');
            const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
            const ano = dataAtual.getFullYear().toString();
  
            // Formatando a data atual para o formato correto
            const dataAtualFormatada = `${dia}/${mes}/${ano}`;

            // Definindo a data atual no campo de entrada de data
            cy.get('#input-1040').invoke('val', dataAtualFormatada);
            
            // Aguardando 3 segundos 
            cy.wait(3000);

            // Clicando no modal calendário
            cy.get('#input-1044').click()
            cy.get('.menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(2) > :nth-child(5) > .v-btn > .v-btn__content').click()
            
            // Definindo a data atual no campo de entrada de data
            cy.get('#input-1044').invoke('val', dataAtualFormatada);

            // Selecionando pedido 
            cy.get('tbody > :nth-child(1) > :nth-child(1) > .v-data-table__checkbox > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
            
            // Fechar coleta
            cy.get(':nth-child(2) > :nth-child(2) > .navy--text').click()

            // Finalizar Remessa 
            cy.get(':nth-child(3) > .col > .navy--text').click()

            // Validação de Remessa Criada com Sucesso
            cy.get(':nth-child(2) > .col > .v-snack > .v-snack__wrapper > .v-snack__content').should('contain','Remessa criada com sucesso.')



    });     
});