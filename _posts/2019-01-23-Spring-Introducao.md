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

# Spring Boot

**O que é:**

O Spring Boot é **opinativo** e **customizável** e por isso seu objetivo é fornecer um conjunto de ferramentas que facilita a criação de aplicativos baseados em Spring autônomos e de produção que você pode "executar".  É uma estrutura leve que simplifica a configuração de aplicativos baseados em Spring e facilita a publicação de nossas aplicações. A intenção é ter o seu projeto rodando o mais rápido possível e sem complicação.

**Vantagens do Spring Boot:**

Em primeiro lugar o Spring Boot é opinativo, ou seja, tem opiniões. É outra forma de dizer que o Spring Boot tem padrões razoáveis; assim, é possível desenvolver um aplicativo rapidamente utilizando esses valores usados com frequência.

Por exemplo, o Tomcat é um contêiner da web muito popular. Por padrão, um aplicativo da web Spring Boot usa um contêiner Tomcat integrado.

Em segundo lugar, ele é customizável, ou seja, uma estrutura opinativa não será muito boa se não puder mudar de opinião. É possível customizar facilmente um aplicativo Spring Boot conforme suas preferências, tanto na configuração inicial quanto posteriormente, no ciclo de desenvolvimento.

Por exemplo, se você prefere o Maven, pode facilmente fazer alterações de **<dependência>** no seu arquivo **POM** para substituir o valor padrão do Spring Boot.

**Como se configura:**

Basta que você diga pra ele quais módulos deseja utilizar (WEB, Template, Persistência, Segurança, etc.) que ele vai reconhecer e configurar.

Você escolhe os módulos que deseja através dos *starters* que inclui no **pom.xml** do seu projeto. Eles, basicamente, são dependências que agrupam outras dependências. Inclusive, como temos esse grupo de dependências representadas pelo starter, nosso pom.xml acaba por ficar mais organizado.
Não esqueça que você pode criar as suas customizações de acordo com suas necessidades.

**Como começar:**

Existem várias formas de se criar um projeto com Spring Boot. Você pode fazer “na mão”, pode-se usar o Spring Boot pela linha de comando, uma IDE ou utilizar o **Spring Initializr**.

![imagem](https://cdn-images-1.medium.com/max/1200/1*CV2P0YWxS_skLrLTQOeePA.png)

Caso você esteja utilizando o **IntelliJ**, ele fornece uma opção para se criar um projeto utilizando o Spring Initializr, o que pra mim é uma coisa muito boa.

