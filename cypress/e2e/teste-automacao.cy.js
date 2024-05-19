/// <reference types="cypress" />
import "cypress-plugin-api"
describe('Login', ()=> {

    var login = 'teste2021@teste.com.br'
    var senha = 'teste'

    it('Login efetuado com sucesso', ()=> {
        //Dado que o usuário está na página de login
        cy.visit('https://www.automationexercise.com/login')
        //Quando procede com login e senha
        cy.efetuarLogin(login, senha)
        //Então o usuário deverá ser redirecionado para a página inicial 
        cy.url().should('be.equal', 'https://www.automationexercise.com/')
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers')
    })

    it('Login mal-sucedido com senha incorreta', ()=> {

        var senha = 'lerolero'
        //Dado que o usuário está na página de login
        cy.visit('https://www.automationexercise.com/login')
        //Quando procede com login e senha invalida
        cy.efetuarLogin(login, senha)
        //Então deverá ver uma mensagem de erro
        cy.contains('p','Your email or password is incorrect!')
    })

    it('Login mal-sucedido com e-mail nao registrado', ()=> {

        var login = 'lerolero@teste.com.br'
        //Dado que o usuário está na página de login
        cy.visit('https://www.automationexercise.com/login')
        //Quando procede com login invalido e senha
        cy.efetuarLogin(login, senha)
        //Então deverá ver uma mensagem de erro
        cy.contains('p','Your email or password is incorrect!')
    })
})

describe('Realizar Busca', ()=>{

    var product6 = 'Summer White Top'
    var productnull = 'produto inexistente'

    it('Pesquisa de produto efetuada com sucesso', ()=> {
        
        //Dado que o usuário está na página de produtos
        cy.visit('https://automationexercise.com/products')
        //Quando efetua uma pesquisa
        cy.get('[id="search_product"]').type(product6)
        cy.get('[id="submit_search"]').click()
        //Então deverá ver o produto pesquisado
        cy.contains('p', product6).should('be.visible')

    })

    it('Pesquisa de produto malsucedida', ()=> {

        //Dado que o usuário está na página de produtos
        cy.visit('https://automationexercise.com/products')
        //Quando efetua uma pesquisa invalida
        cy.get('[id="search_product"]').type(productnull)
        cy.get('[id="submit_search"]').click()
        //Então não deverá ver nenhum produto exibido na tela
        cy.contains('produto inexistente').should('not.exist')
    })
})

describe('Incluir produto no carrinho', ()=> {

    var product1 = 'Blue Top'
    var product4 = 'Stylish Dress'
    var product5 = 'Winter Top'
    var messageaddedtocart = 'Your product has been added to cart.'

    it('Adicionar um único produto ao carrinho', ()=>{
        
        //Dado que o usuário está na página de produtos
        cy.visit('https://automationexercise.com/products')
        //Quando pesquisa por “Blue Top” na barra de pesquisa e adiciona no carrinho
        cy.get('[id="search_product"]').type(product1)
        cy.get('[id="submit_search"]').click()
        //Então o usuário deverá ver a mensagem de sucesso
        cy.get('[data-product-id="1"]').first().click()
        cy.contains('p', messageaddedtocart)
    })

    it('Adicionar dois produtos idênticos ao carrinho', ()=>{

        //Dado que o usuário está na página de produtos
        cy.visit('https://automationexercise.com/products')
        //Quando pesquisa por “Blue Top” na barra de pesquisa
        cy.get('[id="search_product"]').type(product1)
        cy.get('[id="submit_search"]').click()
        //E adiciona ao carrinho
        cy.get('[data-product-id="1"]').first().click()
        cy.contains('p', messageaddedtocart)
        //E repete o mesmo processo
        cy.get('.modal-footer > .btn').click()
        cy.get('[data-product-id="1"]').first().click()
        cy.contains('p', messageaddedtocart)
        //Então o usuário deverá ver a quantidade do produto adicionado como “2”
        cy.contains('View Cart').click()
        cy.url('be.equal', 'https://www.automationexercise.com/view_cart')
        cy.get('[class="disabled"]').should('have.text','2')
    })

    it('Adicionar produtos diferentes ao carrinho', ()=>{

        //Dado que o usuário está na página de produtos
        cy.visit('https://automationexercise.com/products')
        //Quando pesquisa por “Stylish Dress” na barra de pesquisa
        cy.get('[id="search_product"]').type(product4)
        cy.get('[id="submit_search"]').click()
        //E adiciona ao carrinho
        cy.get('[data-product-id="4"]').first().click()
        cy.contains('p', messageaddedtocart)
        cy.get('.modal-footer > .btn').click()
        //E pesquisa por “Winter Top” na barra de pesquisa
        cy.get('[id="search_product"]').clear().type(product5)
        cy.get('[id="submit_search"]').click()
        //E adiciona ao carrinho
        cy.get('[data-product-id="5"]').first().click()
        cy.contains('p', messageaddedtocart)
        //Então o usuário deverá ver os dois produtos no carrinho de compras
        cy.contains('View Cart').click()
        cy.url('be.equal', 'https://www.automationexercise.com/view_cart')
        cy.contains('a', product4).should('be.visible')
        cy.contains('a', product5).should('be.visible')
      })
})

describe('Validar os produtos incluidos no carrinho na tela de pagamento', ()=> {

    var login = 'teste2021@teste.com.br'
    var senha = 'teste'
    var product1 = 'Blue Top'
    var product4 = 'Stylish Dress'
    var product5 = 'Winter Top'
    var messageaddedtocart = 'Your product has been added to cart.'

    it('Validar produtos na página de checkout', ()=>{
        
        //Dado que o usuário adicionou produtos ao carrinho
        cy.visit('https://automationexercise.com/products')
      
        cy.get('[id="search_product"]').type(product4)
        cy.get('[id="submit_search"]').click()
      
        cy.get('[data-product-id="4"]').first().click()
        cy.contains('p', messageaddedtocart)
      
        cy.get('.modal-footer > .btn').click()
      
        cy.get('[id="search_product"]').clear().type(product5)
        cy.get('[id="submit_search"]').click()
      
        cy.get('[data-product-id="5"]').first().click()
        cy.contains('p', messageaddedtocart)
  
        cy.get('.modal-footer > .btn').click()
  
        cy.get('[id="search_product"]').clear().type(product1)
        cy.get('[id="submit_search"]').click()
    
        cy.get('[data-product-id="1"]').first().click()
        cy.contains('p', messageaddedtocart)
        //Quando clica em “Cart”
        cy.contains('View Cart').click()
        //Então o usuário será redirecionado pra URL https://www.automationexercise.com/view_cart
        cy.url('be.equal', 'https://www.automationexercise.com/view_cart')
  
        cy.get('[id="product-4"]').find('.cart_description').find('h4').should('have.text',product4)
        cy.get('[id="product-4"]').find('.cart_price').find('p').should('have.text','Rs. 1500')
        cy.get('[id="product-4"]').find('.cart_quantity').find('button').should('have.text','1')
        cy.get('[id="product-4"]').find('.cart_total').find('p').should('have.text','Rs. 1500')
  
        cy.get('[id="product-5"]').find('.cart_description').find('h4').should('have.text',product5)
        cy.get('[id="product-5"]').find('.cart_price').find('p').should('have.text','Rs. 600')
        cy.get('[id="product-5"]').find('.cart_quantity').find('button').should('have.text','1')
        cy.get('[id="product-5"]').find('.cart_total').find('p').should('have.text','Rs. 600')
  
        cy.get('[id="product-1"]').find('.cart_description').find('h4').should('have.text',product1)
        cy.get('[id="product-1"]').find('.cart_price').find('p').should('have.text','Rs. 500')
        cy.get('[id="product-1"]').find('.cart_quantity').find('button').should('have.text','1')
        cy.get('[id="product-1"]').find('.cart_total').find('p').should('have.text','Rs. 500')
      })

      it('Verificar carrinho após o login', ()=>{

        //Dado que o usuário adicionou produtos ao carrinho
        cy.visit('https://automationexercise.com/products')
        //Quando pesquisa por um produto
        cy.get('[id="search_product"]').type(product4)
        cy.get('[id="submit_search"]').click()
        //E adiciona ao carrinho
        cy.get('[data-product-id="4"]').first().click()
        cy.contains('p', messageaddedtocart)
        cy.contains('View Cart').click()
        //Então efetuara o checkout do carrinho
        cy.checkoutDeslogado(login,senha)
    
        })
})

describe('Testes API', ()=> {
    
    it('Requisicao de metodo GET para API Trello', ()=>{
        cy.request({
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
            method: 'GET'
        }).then(response => {
            // Valida o status code da resposta
            expect(response.status).to.eq(200)
        
            // Acessa o campo "name" dentro da estrutura "list"
            const listName = response.body.data.list.name
        
            // Exibe o conteúdo do campo "name"
            cy.log('List Name: ' + listName)
        
        })
    })
})
