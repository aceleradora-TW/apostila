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

O problema é que, no final do dia, precisamos ter apenas um software funcionando ao invés de três, ou seja, os pares precisam integrar o seu
trabalho, gerando um resultado comum.

Durante muito tempo, isso foi um desafio imenso para equipes de desenvolvimento de software, era sempre caótico integrar código desenvolvido
em paralelo, muitas vezes as duplas sobrescreviam partes comuns do código ao mesmo tempo.

Esses problemas ainda existem no dia-a-dia das equipes, mas pode-se dizer que eles são menos complicados de resolver

Problemas que a integração contínua tenta resolver:
- Merge Hell
- Bugs
- Implementações incorretas
- Feedbacks mais rápidos quando algo está errado
