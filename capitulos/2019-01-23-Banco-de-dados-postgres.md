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

**sudo apt-get udpdate** - Geralmente quando vamos instalar algum programa via terminal, precisamos digitar sudo apt-get update.

**sudo apt-get install postgresql postgresql-contrib** -  Esse comando instala o pacote Postgres junto com um -contribpacote que adicione alguns utilitários e funcionalidades adicionais.

**sudo -i -u postgres** - Alternando para a conta postgres.
                          
**psql** - Acessando um prompt do Postgres

Isso fará você entrar no prompt do PostgreSQL e, a partir daqui, você estará livre para interagir com o sistema de gerenciamento de banco de dados imediatamente.

**\q** - Saia do prompt do PostgreSQL digitando esse comando.


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

# EXERCÍCIOS DE FIXAÇÃO

**Baixe o postgreSQL** 

Comandos para Linux: 

sudo apt-get update

sudo apt-get install postgresql postgresql-contrib

sudo -i -u postgres      

psql                                 

 \q      

**FERRAMENTAS ADICIONAIS**

*PGADMIN 3*

Para uma interface gráfica de usuário do PostgreSQL, use o seguinte comando:

**sudo apt-get install pgadmin3**

**sudo su postgres -c psql postgres**

**ALTER USER postgres WITH PASSWORD 'postgres';**

 ###Execute os seguintes comandos 
 

CREATE TABLE cliente(id_cliente INTEGER, nome_cliente VARCHAR (255), CONSTRAINT pk_id_cliente PRIMARY KEY (id_cliente));

CREATE TABLE pedido(id_pedido INTEGER, total REAL, cliente_id_cliente  INTEGER, FOREIGN KEY(cliente_id_cliente) REFERENCES cliente(id_cliente));

INSERT INTO cliente (id_cliente,nome_cliente) VALUES  (2334, 'Joao da silva');

INSERT INTO cliente (id_cliente,nome_cliente) VALUES  (3456, 'Ana Maria Braga');

INSERT INTO cliente (id_cliente,nome_cliente) VALUES  (8275, 'Joana Barcelos Veiga');

INSERT INTO cliente (id_cliente,nome_cliente) VALUES  (9812, 'Carlos Schallenberger');

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (752, 100.23, 2334);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (334, 1456.00, 2334);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (498, 278.98, 9812);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (125, 874.98, 9812);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (365, 286.30, 9812);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (775, 134.54, 9812);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (834, 187.34, 3456);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (998, 234.34, 8275);

INSERT INTO pedido(id_pedido,total,cliente_id_cliente) VALUES (101, 456.87, 8275);

SELECT * FROM cliente;

SELECT * FROM pedido; 

UPDATE cliente SET nome_cliente = 'Ronaldo'; 

SELECT * FROM cliente; 

DELETE FROM cliente WHERE id_cliente = 8275;