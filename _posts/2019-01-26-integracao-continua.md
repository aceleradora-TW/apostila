---
layout: post
title: "O que é integração contínua?"
date: 2018-12-19 13:25:06 -0700
categories: agil
---

Quando um time desenvolve um software, é preciso paralelizar o trabalho, em outras palavras, cada pessoa (ou par, ou trio, etc.) irá
desenvolver uma tarefa diferente. Consequentemente, isso demandará que as partes do trabalho desenvolvidas em cada tarefa sejam unificadas
em um lugar comum. Pensemos em um exemplo para tentar deixar isso mais claro:

Precisamos desenvolver um software de gestão de estoque, os requisitos básicos são:

- Os usuários devem poder cadastrar e alterar produtos
- Os usuários devem poder pesquisar por produtos
- O sistema deve disponibilizar relatórios sobre as vendas efetuadas a cada semana

Quando o time for desenvolver o software, será possível dividir essas funcionalidades em tarefas e cada parte do time irá desenvolver uma
tarefa em paralelo. Poderíamos ter, por exemplo, o seguinte cenário:

- O Par 1 desenvolverá o cadastro de produtos
- O Par 2 desenvolverá a pesquisa de produtos
- O Par 3 desenvolverá os relatórios

O problema é que, no final do dia, precisamos ter apenas um software funcionando ao invés de três pedaços de código inutilizáveis, ou seja,
os pares precisam integrar o seu trabalho, gerando um resultado comum e utilizável.

Para isso, temos diversos desafios. Vamos quebrar o problema em partes:

__Controle eficiente de mudanças__

O trabalho vai ser desenvolvido em partes e em paralelo. Ou seja, a todo o tempo surgirão mudanças no código do sistema e essas mudanças
precisam ser gerenciadas de maneira eficiente. Este é o primeiro problema a ser resolvido.

__Resultados verificáveis__

As verificações precisam ser rápidas e simples de executar

__Software funcionando em diferentes ambientes__

O que é ambiente?

Precisa ser simples

__Como usar integração contínua?__

Aprender os conceitos

Adotar as ferramentas

