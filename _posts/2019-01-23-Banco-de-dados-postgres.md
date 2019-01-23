---
layout: post
title: "Banco de Dados"
date: 2013-06-22 16:25:06 -0700
categories: banco-de-dados
---
   
São um conjunto de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas, são coleções organizadas de dados. Sempre que for possível agrupar informações que se relacionam e tratam de um mesmo assunto, posso dizer que tenho um banco de dados.
   
Já um sistema de gerenciamento de banco de dados (SGBD) é um software que possui recursos capazes de manipular as informações do banco de dados e interagir com o usuário. Um exemplo de SGBD é: 

![ImagemPostgreSQL](https://lh4.googleusercontent.com/ZthMHOYo9r5QnYduoOBsdzGoUhQ69PieuabvgA27bd8lBuI4QMi2-uY66wWxxELL1kXti140zD0ZEmlVKmonMHc8fScH3QoqGfkefveKvwprj49otRV8OOr_RBfkXSPZ6E0CkVjJ)É um Sistema Gerenciador de Bancos de dados Relacional estendido e de código aberto(SGBDR- o R é porque ele é relacional). Existem vários Modelos de Base de Dados, alguns exemplos são: Modelo em Rede, Modelo Hierárquico, Modelo Relacional,Orientado a Objetos. 
Para criar a base de dados o SGBD utiliza uma linguagem. A mais utilizada atualmente é o SQL, (Structured Query Language). Para armazenar um dado em um banco de dados, é necessário criar tabelas e dentro delas são criadas colunas, onde as informações são armazenadas.

**Comandos SQL(utilizando PostgreSQL)**

```PostgreSQL
CREATE TABLE pessoa (
id serial primary key,
nome varchar(255));
```
O comando CREATE TABLE cria uma tabela, pessoa é um exemplo de nome para sua tabela e dentro dos () vai as suas colunas, como exemplos temos  id e nome.

```PostgreSQL
INSERT INTO TABLE pessoa VALUES (1,”Ingrid”);
```                                                                                                                                                                                            
O comando INSERT INTO TABLE insere na tabela pessoa respectivamente os seguintes valores: id=1 e nome=Ingrid.

```PostgreSQL
SELECT * FROM  pessoa;
```
Seleciona toda a tabela pessoa.

```PostgreSQL
UPDATE pessoa SET nome = ‘Brenda’ WHERE id = 1; 
```
Atualiza o nome do cliente para Brenda se o Id for igual a 1

```PostgreSQL
DELETE FROM pessoa WHERE id = 1;
```
Exclui as linhas onde o id é igual a 1 na tabela especificada. Se o id não for especificado, o efeito é excluir todas as linhas da tabela.
