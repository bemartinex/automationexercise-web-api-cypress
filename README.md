## Teste de Automação - Keeggo
Desafio web: Criar de testes automatizados na plataforma Automation Practice(https://www.automationexercise.com/login) que validam as seguintes funcionalidades:
* Login;
* Realizar buscar;
* Incluir produto no carrinho;
* Validar os produtos incluídos no carrinho na tela de pagamento;

Desafio API: Enviar uma requisição do metodo GET para API “https://api.trello.com/1/actions/592f11060f95a3d3d46a987a” e validar o
status code da resposta do serviço. Além disso, exibir o conteúdo do campo “name” da estrutura “list”.
<br>

## Tecnologias e Ferramentas

<img alt="VSCode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" /> <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white" /> <img alt="Cypress" src="https://img.shields.io/badge/Cypress-17202C.svg?style=for-the-badge&logo=Cypress&logoColor=white" /><img alt="Cypress" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />  <img alt="Cypress" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 

## Instalações Necessárias
```bash

# Instalação de projeto Node.js
$ npm install

#Instalaçao do framework Cypress e Plugin Cypress API
$ npm install cypress@13.9.0 cypress-plugin-api@2.6.1 --save-dev

```

## Casos de teste

**_Feature: Login_**
<br>
<br>
**CT01: Login efetuado com sucesso**<br>
Dado que o usuário está na página de login " https://automationexercise.com/login "<br>
Quando digita “teste2021@teste.com.br” no campo de e-mail<br>
E digita “teste” no campo de senha<br>
E clica no botão "Login"<br>
Então o usuário deverá ser redirecionado para a página inicial “Home”.<br>
<br>
**CT02: Login mal-sucedido com senha incorreta**<br>
Dado que o usuário está na página de login "https://automationexercise.com/login<br>
Quando digita “teste2021@teste.com.br” no campo de e-mail<br>
E insere "lerolero" no campo de senha<br>
E clica no botão "Login"<br>
Então deverá ver uma mensagem de erro " Your email or password is incorrect!".<br>
<br>
**CT03: Login mal-sucedido com e-mail não registrado**
Dado que o usuário está na página de login "https://automationexercise.com/login"<br>
Quando digita “lerolero@teste.com.br” no campo de e-mail<br>
E digita “teste” no campo de senha<br>
E clica no botão "Entrar"<br>
Então deverá ver uma mensagem de erro " Your email or password is incorrect! ".<br>
<br>
<br>
**_Feature: Realizar busca_**
<br>
<br>
**CT04: Pesquisa de produto efetuada com sucesso**<br>
Dado que o usuário está na página de produtos<br>
"https://automationexercise.com/products"<br>
Quando insere “Summer White Top” na barra de pesquisa<br>
E clica no botão "🔎"<br>
Então deverá ver o produto descrito como “Summer White Top”<br>
<br>
**CT05: Pesquisa de produto malsucedida**<br>
Dado que o usuário está na página de produtos<br>
"https://automationexercise.com/products"<br>
Quando insere “produto inexistente” na barra de pesquisa<br>
E clica no botão "🔎"<br>
Então não deverá ver nenhum produto exibido na tela<br>
<br>
<br>
**_Feature: Incluir produto no carrinho_**
<br>
<br>
**CT06: Adicionar um único produto ao carrinho<br>**
Dado que o usuário está na página de produtos<br>
"https://automationexercise.com/products"<br>
Quando pesquisa por “Blue Top” na barra de pesquisa<br>
E clica no botão "🔎"<br>
E clica no botão "Add to cart"<br>
Então o usuário deverá ver a mensagem "Your product has been added to cart"<br>
<br>
**CT07: Adicionar dois produtos idênticos ao carrinho<br>**
Dado que o usuário está na página de produtos<br>
"https://automationexercise.com/products"<br>
Quando pesquisa por “Blue Top” na barra de pesquisa<br>
E clica no botão "🔎"<br>
E clica no botão "Add to cart"<br>
E refaz o mesmo processo de pesquisar e adicionar o produto ao carrinho<br>
E clica no botão “View cart”<br>
Então o usuário deverá ver a quantidade do produto adicionado como “2”<br>
<br>
**CT08: Adicionar produtos diferentes ao carrinho<br>**
Dado que o usuário está na página de produtos<br>
"https://automationexercise.com/products"<br>
Quando pesquisa por “Stylish Dress” na barra de pesquisa<br>
E clica no botão "🔎"<br>
E clica no botão "Add to cart"<br>
E repete a busca pelo produto “Winter Top”<br>
E clica no botão "Add to cart" do segundo produto<br>
Então o usuário deverá ver os dois produtos no carrinho de compras<br>
<br>
<br>
**_Feature: Validar os produtos incluídos no carrinho na tela de pagamento_**
<br>
<br>
**CT09: Validar produtos na página de checkout**<br>
Dado que o usuário adicionou produtos ao carrinho<br>
Quando clica em “Cart”<br>
Então o usuário será redirecionado pra URL https://www.automationexercise.com/view_cart<br>
E deverá ver todos os produtos que foram adicionados ao carrinho<br>
E deverá ver os detalhes de cada produto como: “Item”, “Description”, “Price”,“Quantity” e “Total”.<br>
<br>
**CT10: Verificar carrinho após o login**<br>
Dado que o usuário está na tela do carrinho<br>
Quando clica em “Proceed to Checkout”<br>
E exibido uma janela informando que para verificar o carrinho é necessário efetuar o
registro ou login.<br>
E clica no link “Register/Login”<br>
E efetua o registro ou login<br>
E clica em “Cart” para ir a tela de carrinho novamente<br>
E clica em “Proceed to Checkout”<br>
Então o usuário terá seu carrinho verificado, informando os detalhes de endereco<br>
