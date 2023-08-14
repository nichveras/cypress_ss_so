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

        // Aguarde 3 s
        cy.wait(3000);  
                                           
        //Iniciar Produção-Linha 1
        cy.get('.list-group > :nth-child(4)').click()
        cy.get('[href="/pedidos-web/aguardando-producao"] > .h6').click();
        cy.get(':nth-child(1) > :nth-child(2) > #order').type('61000097')
        cy.get('.row > .btn').click()
        cy.get(':nth-child(6) > :nth-child(1) > .btn').click()
        //Selecionar localização e Separadores
        cy.get(':nth-child(1) > div > #input-3').select('A5');
        // Aguarde 2 s
        cy.wait(2000); 
        cy.get(':nth-child(2) > div > #input-3').select('ANGELA MARIA SOUSA CHAGAS');
        // Aguarde 2 s
        cy.wait(2000); 
        cy.get(':nth-child(3) > div > #input-3').select('DAVI SILVA PEREIRA');
        // Aguarde 2 s
        cy.wait(2000); 
        cy.get('.btn-iniciar').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Bipando Placas
        cy.get('[data-v-f8a6578c=""][data-v-ffaf3e12=""] > table > :nth-child(1) > .itens > :nth-child(1) > :nth-child(2) > .prod-cod')
        .type('61000097001')
        .type('{enter}');
        // Aguarde 3 s
        cy.wait(3000);  
        cy.get('[data-v-f8a6578c=""][data-v-ffaf3e12=""] > table > :nth-child(2) > .itens > :nth-child(1) > :nth-child(2) > .prod-cod')
        .type('61000097002')
        .type('{enter}');
        // Aguarde 3 s
        cy.wait(3000); 
        cy.get('[data-v-f8a6578c=""][data-v-ffaf3e12=""] > table > :nth-child(3) > .itens > :nth-child(1) > :nth-child(2) > .prod-cod')
        .type('61000097003')
        .type('{enter}');
         // Aguarde 3 s
         cy.wait(3000); 
        //Fechar caixa
        cy.get('.justify-content-around > :nth-child(2) > .btn').click()
        //Validar Volume criado com sucesso
        cy.get('.alert').should('contain','Volume criado com sucesso.')
        //Clicar em OK
        cy.get('.col-8 > .btn').click()
        //Finalizar Linha
        cy.get('.justify-content-around > :nth-child(2) > .btn').click()
        // Aguarde 3 s
        cy.wait(3000);   

        //Em Linha de Produção
        cy.get('[href="/pedidos-web/em-linha-de-producao"] > .h6').click()
        cy.get(':nth-child(1) > :nth-child(2) > #order').type('61000097')
        cy.get('.row > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Continuar Produção
        cy.get(':nth-child(6) > :nth-child(1) > .btn').click()
        //Linha 2
        cy.get('.infos > .det-info > :nth-child(1)').click()
        //Selecionar Cabos
        cy.get(':nth-child(1) > :nth-child(2) > .py-0').type('888')
        // Aguarde 3 s
        cy.wait(3000); 
        cy.get(':nth-child(2) > :nth-child(2) > .py-0').type('888')
        // Aguarde 3 s
        cy.wait(3000); 
        //Fechar caixa
        cy.get(':nth-child(2) > .btn > b').click()
        //Validar Volume criado com sucesso
        cy.get('.alert').should('contain','Volume criado com sucesso.')
        //Clicar em OK
        cy.get('.col-8 > .btn').click()
        //Finalizar Linha
        cy.get(':nth-child(2) > .btn > b').click()
        // Aguarde 3 s
        cy.wait(3000);  

         //Em Linha de Produção
        cy.get('[href="/pedidos-web/em-linha-de-producao"] > .h6').click()
        cy.get(':nth-child(1) > :nth-child(2) > #order').type('61000097')
        cy.get('.row > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Continuar Produção
        cy.get(':nth-child(6) > :nth-child(1) > .btn').click()
        //Linha 3
        cy.get('.det-info > .btn').click()
        //Selecionar Placa
        cy.get('.py-0').type(888)
        // Aguarde 3 s
        cy.wait(3000); 
        //Fechar Caixa
        cy.get('.btn-fechar > .btn').click()
        //Validar Volume criado com sucesso
        cy.get('.alert').should('contain','Sucesso na criação da caixa')
        //Clicar em OK
        cy.get('.col-8 > .btn').click()
        //Finalizar Linha
        cy.get(':nth-child(2) > .btn > b').click()
        // Aguarde 3 s
        cy.wait(3000);   
        //Conferencia AC
        cy.get('[href="/pedidos-web/em-conferencia-ac"] > .h6').click()
        cy.get(':nth-child(1) > :nth-child(2) > #order').type('61000097')
        cy.get('.row > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Continuar Conferencia
        cy.get('li > a > .btn').click()
        //Bipar volume da linha 3
        cy.get('.input-bipagem-codigo-volume').type(610000973001)
        // Aguarde 3 s
        cy.wait(3000); 
        //Confirmar
        cy.get('.my-4').click()
        cy.get(':nth-child(2) > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 

        //Aguardando Conferencia
        cy.get('[href="/pedidos-web/aguardando-conferencia"] > .h6').click()
        cy.get(':nth-child(1) > :nth-child(2) > #order').type('61000097')
        cy.get('.row > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Iniciar Conferencia
        cy.get(':nth-child(6) > :nth-child(1) > .btn').click()
        //Bipar Volumes
        cy.get('#volume-0').type('610000971001')
        .type('{enter}');
        // Aguarde 3 s
        cy.wait(3000); 

        cy.get('#volume-1').type('610000972001')
        .type('{enter}');
        // Aguarde 3 s
        cy.wait(3000); 

        cy.get('#volume-2').type('610000973001')
        .type('{enter}');
        // Aguarde 3 s
        cy.wait(3000); 

        //Fechar Carga
        cy.get(':nth-child(2) > .text-center > .btn > b').click()
        //Finalizar Conferencia
        cy.get(':nth-child(2) > .text-center > .btn').click()
        cy.get('.alert').should('contain','Pedido Conferido!')
        //Clicar em OK
        cy.get('.col-8 > .btn').click()
        // Aguarde 3 s
        cy.wait(3000);  

        //Conferir status do Pedido em Administração
        cy.get('[href="/pedidos-web"] > span').click()
        cy.get(':nth-child(1) > :nth-child(2) > #order').type('61000097')
        cy.get('.row > .btn').click()
        // Aguarde 3 s
        cy.wait(3000); 
        //Gerenciar
        cy.get(':nth-child(6) > :nth-child(1) > .btn').click()

        //Validar se o Pedido está Aguardando Embarque
        cy.get('.topo-det > .det-info > :nth-child(1)').should('contain','STATUS AGUARDANDO EMBARQUE')


        

        








        
    });

});
