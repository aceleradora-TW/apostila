---
layout: post
title: Entendendo HTTP
date: '2014-07-22 16:25:06 -0700'
categories: web
---

# Como funciona o HTTP e a Web

## HTTP \(Hypertext Transfer Protocol\)

### O que é?

O HTTP é um protocolo da camada de aplicação, normalmente baseado numa camada TCP/IP, e que é utilizada para a transmissão de documentos hipermidia, como o HTML \(Hypertext Markup Language\). O protocolo é baseado na ideia de cliente -&gt; servidor, o que significa que as conexões são abertas pelo cliente, que envia uma requisição e espera o servidor retornar uma resposta. Esse protocolo é mais conhecido por ser utilizado em larga escala na WWW \(World Wide Web ou Rede Mundial de Computadores\). Quando utilizamos nosso navegador para acessar a página principal do Google, por exemplo, estamos fazendo o seguinte \(simplificadamente para a explicação\):

* `Abrimos uma conexão com o servidor do Google`
* `Pedimos ao servidor a página inicial`
* `Esperamos o servidor retornar alguma resposta`
* `Apresentamos a resposta que o servidor nos mostrou`
* `Fechamos nossa conexão`

Estes passos acontecem diversas vezes, toda vez que precisamos de um novo recurso, devemos repetir esses passos, somente mudando o que iremos pedir para o servidor fazer. Para isso, devemos informar qual o servidor queremos acessar, no nosso exemplo `www.google.com.br` \(que irá ser convertido para um endereço de IP por um servidor de DNS\), falando que queremos \(GET\) a página principal, ou seja `GET /`. `GET` é um dos verbos definidos pelo protocolo HTTP, e vamos olhar mais a fundo eles no próximo módulo.

![Exemplo](https://betterexplained.com/wp-content/uploads/compression/HTTP_request.png)

### Métodos HTTP \(Verbos\)

Existem vários métodos HTTP, cada um deles é uma maneira de informar ao servidor o que estamos requisitando. Os mais utilizados são:

* `GET`: O método `GET` é utilizado quando estamos pedindo para o servidor nos retornar algum recurso. Como, por exemplo, quando pedimos a página inicial do Google.
* `POST`: O método `POST` é utilizando quando estamos enviando informações ao servidor para que ele faça alguma coisa com esses dados. Por exemplo, quando vamos nos cadastrar no GMAIL, após pedirmos a página onde haverá o formulário\(ou seja, utilizando um `GET`\) enviaremos as informações para o servidor com um `POST`.
* `DELETE`: O método `DELETE` é utilizado, como o próprio nome diz, para deletar alguma coisa. Por exemplo, quando temos uma conta num site, e queremos excluir ela, devemos informar um `ID` e fazer uma requisição com o método `DELETE` para o servidor.
* `PUT/PATCH`: Os métodos `PUT` ou `PATCH` é utilizado para atualizar alguma informação que foi previamente salva pelo servidor. Por exemplo, quando queremos atualizar nosso endereço no cadastro do Gmail, vamos mandar uma requisição com método `PUT` e as informações para que o servidor saiba alterar.

### Códigos de status HTTP

Os códigos HTTP servem como uma ferramenta para que saibamos o que aconteceu com a nossa requisição. Estes status sempre são retornados juntamente com a resposta. Os mais conhecidos/utilizados são

* **200**: Significa que a nossa requisição funcionou como deveria e que o que pedimos deve ter sido retornado.
* **404**: Significa que o recurso que estamos procurando não foi encontrado no servidor, por exemplo, quando pedimos uma página que não existe no servidor.
* **500**: Significa que alguma erro aconteceu no servidor e que ele não pode responder a nossa requisição. 

Estes são alguns dos mais utilizados, podemos encontrar uma lista mais detalhada em: [https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

## EXERCÍCIOS DE FIXAÇÃO

Baseado no material desta apostila realize cada uma das tarefas a seguir:

1. Para que serve o método GET?
2. Para que serve o método POST?
3. Para que usamos o método DELETE?
4. Qual a semelhança entre os métodos PUT/PATCH?

