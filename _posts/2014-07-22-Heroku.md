---
layout: post
title: "Heroku"
date: 2014-07-22 16:25:06 -0700
categories: Heroku
---

#Heroku

##PAAS (Platform as a service)

*O QUE É?*

* Plataforma como serviço (PaaS).
* Criação de diversas aplicações: node, python, php.

![imagem](https://lh4.googleusercontent.com/6jzM1G4KlUYakx8oqImIlud3LQPpUAxFfO6opzIZaaXpqTd_gTmx31ThDnVbHS-I0P-CejzR6qNAkvcAfHtgEyLvlrw0fNF9C6bADF0i5vrz9qQW-vf4P-FTVA3LC3xO_irqz2Aj9GQutJ9IEw)

*INICIANDO SUA APLICAÇÃO*

![imagem](https://lh5.googleusercontent.com/dOqUtSy9SD9NwhdcEgk5IHmkv1LSjC4vhPm57Cch0bHhIRdggaIc1w5h0gDEwLukJl7FmO5uXzPlOVk9qHKzKZrXitwsrRjfESeTjJkF867v4G2SIssFDR_ec0H1JpNgbI7a5hFA3ibi3xVtLA)

***Clique no link***
https://devcenter.heroku.com/articles/getting-started-with-gradle-on-heroku#deploy-the-app

*INICIANDO SUA APLICAÇÃO COM NODE.JS*

![imagem](https://lh3.googleusercontent.com/OnYsN4UYAUavayeyO_-bCwyzuhxHW17E9Rp6O0zTOs39T5Ggt9v3FfF9H1z3Q_1tJuAV9YMTPTygotgV9Yi5zXnLmtukPCNTS6OCEofInne_5j3yAmWxrEqr0oKehxrdvrgRKIuESm0)

*INICIANDO SUA APLICAÇÃO COM EXPRESS-GENERATOR*

***Criar repositório GitHub (dar clone)***

1. $ sudo npm install express-generator -g 
2. $ express --view=hbs /tmp/foo && cd /tmp/foo
3. $ npm install 
4. $ npm start 
5. Acesse:  localhost:3000/

*INICIANDO SUA APLICAÇÃO COM JAVA*

Será necessário o arquivo “pom.xml” na raiz do projeto.

![imagem](https://lh3.googleusercontent.com/aumi0roN176NBKULbGriERJw439fOVzCUENCylSABg_DTJpbzbODLoz3P8lAzBWukRivwDH5ssF_jd00wTGRI8Yw-k1mphMr028j_5LxeHYeT-NgyIXoq2KgIB3LPTqPFqFgKw8d7kQ)

*SUAS IMPORTÂNCIAS*

* Solução de alto nível.
* Abstrai os detalhes de infraestrutura.
* Manutenção.
* Escalabilidade.
* Agilidade para disponibilizar uma aplicação na web.

####DEPLOY DA APLICAÇÃO
####AMBIENTES STAGING - DEV

#####PROCFILE?!?

![imagem](https://lh3.googleusercontent.com/jPwcSDYyjM4Xv6AsgLk9w0rD4xR2AlDzQicckL_7_owzApyH-XjwObgJu8IbYuloJVc8ztXEzmJATQDIlXwEVPHEJ-7MYotN0txu5R03IfEDN2m7dwAl5Wm85NBla6JqhceTwiFa_04)

Arquivo específico do Heroku;

Procfile não é necessário com linguagens suportadas pelo Heroku;

A plataforma detecta automaticamente a linguagem; 

Procfile é recomendado para ter maior controle e flexibilidade na sua aplicação.

#####Tipo do serviço: ação do Heroku

./gradlew assemble - gera o .jar

apontar o jar criado no Procfile

####HEROKU LOGS

Os logs são um fluxo de eventos com registro de data e hora agregados dos fluxos de saída de todos os processos em execução.

```
---$ heroku logs -a “nome-da-aplicação”---
```
![imagem](https://lh3.googleusercontent.com/dfXzNzrudJwrcgiir_cFFhW91LCEmYkuhuwaVPy4nbfC2p0fen4oySq7UkJogzkyHxii4xfNZaTIAFpgv-4N6Q3SQ7hdzvYOuY5rFD7j7u-Sy2g-kCh_ZWADZTVlzBAXAN9lysXq-G0)

####HEROKU LOGS continuação

![imagem](https://lh5.googleusercontent.com/KYypKSs9IaOjzXkNzjpFzqGi-R4qVhF59M97_yzTOrWbHB6vpbKebheunyg0s4iWUOqPFG6W0-N5kQgkNKF1bHDWQVlbhyJajjfD8zcehmufNEEt370ZPRfCoSBHAkr5vMIspAdkdFI)

####COMO CONECTA O BANCO NO HEROKU?

**Configurações necessárias:**

Antes de iniciar o processo de configuração do ambiente, deve-se ter o heroku instalado

**Criar o banco usando postgresql no Heroku:**

```
$ heroku addons:create heroku-postgresql:hobby-dev 
```
####Heroku Add-ons

***Clique no link***
https://elements.heroku.com/addons

####COMO FUNCIONA O BANCO NO HEROKU?
O postgreSQL fica rodando no servidor junto com a aplicação.

####E O CRUD?
**Comando para habilitar o Heroku CLI, Fazer os comandos do SQL direto para o Heroku:**
```
$ heroku pg:psql -a <NOME DA APLICAÇÃO>
```
Heroku Postgres é integrado com Interface de Linha de Comando CLI

heroku pg:psql — Executa um script

**LINKS PARA ESTUDO**

Artigo para a config do banco em português: https://bit.ly/2MJFDnP

Tutorial do Heroku: https://bit.ly/1wiwQuP

Vídeo sobre Deploy no Heroku e Procfile: https://bit.ly/2emdJw5

Curso gratuito de Heroku na Udacity: https://bit.ly/2nDRc5j



