## Expectativa de vocês sobre o curso
### Tópicos Gerais
- Conhecer algo diferente de Java: Certeza
- APIs: Vamos indiretamente criar uma
    - API Restful
- Sistemas de Pagamentos
    - https://pagar.me/
    - https://moip.com.br/

- Como funciona o JavaScript 
    - 
- Manutenção de Servidor
    - Platinum Server Management.com

## Revisão
- Lógica de Programação
    - Não é tipado
    - Async
- JavaScript rodando fora do Browser
- JavaScript rodando no Servidor


## Como o Node funciona?
- Interpretador V8: https://github.com/v8/v8
- Acesso a coisas do sistema: Libuv https://github.com/libuv/libuv
- Poderes de uma linguagem de back
    - Acesso a baixo nivel
    - Acesso a disco!!!!
    - Acesso a rede
- Livros de Node legais:
    - https://novatec.com.br/livros/nodejs-2ed/


## Dicas para a vida:
- Refactoring: https://www.amazon.com.br/Refactoring-Improving-Design-Existing-Code/dp/0134757599?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_1157433115_58530734048_257324212232_aud-519888259198:pla-301112824450_c_

## Como gerar o package.json?
1 - npm init
> Aperta enter para tudo até surgir o arquivo package.json

2 - npm install --save-dev nodemon
3 - npm install --save express
4 - Sempre que quiser gerar a pasta node_modules, basta rodar `npm install`

## Como funciona o forEach?
```js
produtos.forEach(function(produtoAtual) {
	console.log(produtoAtual)
})

Array.prototype.forEach = function(funcaoDeCallback) {
    const arrayAtual = this
    for(item of arrayAtual) {
        funcaoDeCallback(item)
    }
}

Array.prototype.map = function(funcaoDeCallback) {
    const arrayAtual = this
    const novoArray = []
    for(item of arrayAtual) {
        novoArray.push(funcaoDeCallback(item))
    }
    return novoArray
}
```

## Dicas para lidar com Arrays:
- https://www.youtube.com/watch?v=oUx0leLZSbY

## Dicas para cada coisinha do JS em vídeo: 
- https://www.youtube.com/watch?v=093dIOCNeIc&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc 

## Dicas de estudo: 
- https://www.hackerrank.com/


## Formas de enviar emails
- Inbound: https://www.rdstation.com/
- Dinamize para enviar email marketing: https://www.dinamize.com.br/mail2easypro-email-marketing/
- Disparo de emails: 
    - https://postmarkapp.com/
    - https://sendgrid.com/marketing/sendgrid-services-pt/

## Usando MySQL 
1 - Logar no mysql
```terminal
mysql -u root -p  
Enter password: caelum
```
2 - CREATE DATABASE casadocodego;
3 - USE casadocodego;
4 - 
CREATE TABLE livros (
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255) DEFAULT NULL,
    preco DECIMAL(10,2) DEFAULT NULL,
    descricao TEXT,
    PRIMARY KEY (id)
)
5 - 
INSERT INTO livros (titulo, preco, descricao)
VALUES ('Livro Ruby', 10.10, 'Um livro show');

INSERT INTO livros (titulo, preco, descricao)
VALUES ('Livro NodeJS', 10.10, 'Um livro show');

6 - SELECT * FROM livros;
> Tem que aparecer os livros criados por vocês :) 

## Como funciona o tal do event loop e o assincrono no JS? 
- http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcmVxdWVzdERvVXN1YXJpbyhudW1lcm8pIHsKICAgIGNvbnNvbGUubG9nKCdWZWlvIHVtIHJlcXVlc3Qgbm92bycsIG51bWVybykKfQoKCnNldFRpbWVvdXQoZnVuY3Rpb24gZnVuY2FvMSgpIHsKICAgIHJlcXVlc3REb1VzdWFyaW8oMSkgICAgCn0sIDEwMDAwKQoKc2V0VGltZW91dChmdW5jdGlvbiBmdW5jYW8yKCkgewogICAgcmVxdWVzdERvVXN1YXJpbygyKSAgICAKfSwgMTAwKQoKc2V0VGltZW91dChmdW5jdGlvbiBmdW5jYW8zKCkgewogICAgcmVxdWVzdERvVXN1YXJpbygzKSAgICAKfSwgMTAwKQoK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

## Como funciona a arrow function?
Contexto Dinâmico
funções criadas com `function`, tem o this que varia de acordo com o lugar onde a função é executada

Contexto Leitura (Léxico)
Criada com `() => {}` Ajuda a garantir o this de onde a função foi criada

## Dica de arquitetura avançada:
- http://balta.io/curso/1975
- https://www.casadocodigo.com.br/products/livro-oo-solid

## Dicas de livros gerais: 
- https://www.casadocodigo.com.br/products/livro-spring-mvc

## Lidando com validações
- Sempre procure uma alternativa de "Fluent Validators", economiza ifs e deixa mais legivel o código
- https://github.com/andrebaltieri/FluentValidator


## Cursos de Git:
- https://www.udemy.com/git-e-github-para-iniciantes/
- https://www.alura.com.br/curso-online-git
- https://www.youtube.com/watch?v=C18qzn7j4SM

## Como manjar dos status do HTTP:
- https://httpstatusdogs.com/

## API REST
- Usar os métodos do HTTP para trafegar informação pela rede
- Stateless
- Como acessar uma API externa via Node: https://www.npmjs.com/package/node-fetch


====

# Testes
## Documentação
- Ela mofa
- É dificil de atualizar
- não da pra garantir que o código não quebra
======


- Acessar os dados de alguma forma
- Mandamos um GET para o servidor e pegamos os dados

## Testes Automatizados

function soma(n1, n2) {
    return n1 * n2
}


if(soma(1,1) === 2) {

} else {
    provalmente a funcao soma está errada
}

## Libs de teste
1 - npm install mocha chai

## Tipos de teste
- Unidade: Mais simplão da vida
    - Testar uma função/trecho pequeno de código
    - Mocha + Chai
- Integração: subir o backend e testar os retornos
    - Testar o retorno do nosso site/api
    - Mocha + Chai + Supertest
- e2e: emular um usuário usando um browser
    - Testar fluxos de usuário
    - https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Is-Simple
