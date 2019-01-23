---
layout: post
title: "Thymeleaf"
date: 2014-07-22 16:25:06 -0700
categories: frontend
---
  
## O que é?

 Thymeleaf é um motor de templates para Java, ou seja, um mecanismo com capacidade para processar e criar HTML, XML, JavaScript, CSS e texto.
 Os templates são escritos, em sua maioria, com código HTML5 sendo mais adequado para servir XHTML / HTML5 na camada de visualização de aplicativos da Web baseados em MVC, mas pode processar arquivos mesmo em ambientes off-line e tem boa integração com o Spring Framework

## Como Funciona:

**Dialetos padrão:**

O thymeleaf vem com algo chamado dialetos padrão (chamados *Standard* e *SpringStandard*) que definem um conjunto de recursos que devem ser mais do que suficientes para a maioria dos cenários.Você pode identificar quando esses dialetos padrão estão sendo usados ​​em um modelo porque ele conterá atributos começando com o **th**(prefixo), como `<span th:text="...">`.

Os dialetos Standard e SpringStandard são quase idênticos, exceto que o SpringStandard inclui recursos específicos para integração em aplicações Spring MVC.

**Sintaxe de expressão padrão:**

A maioria dos atributos Thymeleaf permite que seus valores sejam definidos como ou contendo expressões que chamaremos de Expressões Padrão por causa dos dialetos nos quais são usados. Eles podem ser de cinco tipos:

* `${...}` : Expressões variáveis.
* `*{...}` : Expressões de seleção.
* `#{...}` : Mensagens (i18n) expressões.
* `@{...}` : Expressões de link (URL).
* `~{...}` : Expressões de fragmento.

***Exemplos:***

* `th:each`: Percorre uma coleção de objetos enviada pelo controller;
* `th:if`: Habilita e desabilita controles do HTML de acordo com a condição recebida;
* `th:object`: Define o objeto que o controller irá receber e enviar por meio de um formulário;
* `th:field`: Faz bind dos atributos do objeto do formulário com os inputs;
* `th:href`: Para adicionar um link.

No código:

URLs absolutas permitem que você crie links para outros servidores. Eles começam especificando um nome de protocolo **(http:// ou https://)**

![imagem](file:///home/aluno6/Pictures/Screenshot%20from%202019-01-22%2012-55-49.png)

Os tipos de URLs mais usados ​​são os relativos ao contexto. Estas são as URLs que devem ser relativas à raiz da aplicação Web.
URLs relativos ao contexto começam com /:

![imagem](file:///home/aluno6/Pictures/Screenshot%20from%202019-01-22%2012-59-00.png)

Basicamente um for each, onde percorre uma lista de objetos(no nosso caso mensagens)

![imagem](file:///home/aluno6/Pictures/Screenshot%20from%202019-01-22%2013-17-21.png)