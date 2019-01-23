---
layout: post
title: "Introdução"
date: 2014-06-22 16:25:06 -0700
categories: spring
---

# Spring Framework

**O que é:**

O Spring é um framework Java criado com o objetivo de facilitar o desenvolvimento de aplicações, oferecendo um conjunto de soluções prontas para serem implementadas na mesma (Algumas das soluções seriam: MVC, Persistencia, Transaction).
O Spring utiliza os conceitos de Inversão de Controle e Injeção de Dependências.

**Inversão de Controle:** 

É um padrão de desenvolvimento onde se insere determinado código da aplicação dentro do framework, que ficará responsável pelo controle da chamada dos métodos diferente da programação tradicional, ou seja, não é determinada diretamente pelo programador.
Se um dia o nome da classe ou o lugar onde ela está armazenada for alterado, nós apenas alteraríamos um arquivo de configuração, não mexeríamos em uma única linha do código da classe.

**Injeção de Dependência:**

 Nesta solução as dependências entre os módulos não são definidas programaticamente, mas sim pela configuração de uma infraestrutura de software (container) que é responsável por "injetar" em cada componente suas dependências declaradas. A Injeção de dependência se relaciona com o padrão Inversão de controle mas não pode ser considerada um sinônimo deste.

**Outros projetos Spring**

* Spring MVC: para desenvolvimento de aplicações web
(módulo do Spring Framework).

* Spring Security: para inserção de funcionalidades de
autenticação e autorização.

* Spring Data: para aplicações que usam novas tecnologias
de armazenamento de dados como bancos NoSQL e
serviços na nuvem.

* Além de outros. Visite http://spring.io/projects

