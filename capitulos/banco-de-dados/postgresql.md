# Começando com o PostgreSQL

São um conjunto de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas, são coleções organizadas de dados. Sempre que for possível agrupar informações que se relacionam e tratam de um mesmo assunto, posso dizer que tenho um banco de dados.

Já um sistema de gerenciamento de banco de dados (SGBD) é um software que possui recursos capazes de manipular as informações do banco de dados e interagir com o usuário. Um exemplo de SGBD é:

![ImagemPostgreSQL](https://lh4.googleusercontent.com/ZthMHOYo9r5QnYduoOBsdzGoUhQ69PieuabvgA27bd8lBuI4QMi2-uY66wWxxELL1kXti140zD0ZEmlVKmonMHc8fScH3QoqGfkefveKvwprj49otRV8OOr_RBfkXSPZ6E0CkVjJ)

É um Sistema Gerenciador de Bancos de dados Relacional estendido e de código aberto(SGBDR- o R é porque ele é relacional). Existem vários Modelos de Base de Dados, alguns exemplos são: Modelo em Rede, Modelo Hierárquico, Modelo Relacional,Orientado a Objetos.

Para criar a base de dados o SGBD utiliza uma linguagem. A mais utilizada atualmente é o SQL, (Structured Query Language). Para armazenar um dado em um banco de dados, é necessário criar tabelas e dentro delas são criadas colunas, onde as informações são armazenadas.

```bash
sudo apt udpdate
```

Quando vamos instalar algum programa via terminal, é sempre uma boa ideia executar antes `sudo apt update`, pois ele irá atualizar os links para os repositórios de onde o Linux faz download dos programas (como se fossem links para o Baixaki que o Linux usa internamente para encontrar os instaladores dos programas).

```bash
sudo apt install postgresql postgresql-contrib
```

Esse comando instala o pacote Postgres junto com o pacote contrib, que adiciona alguns utilitários e funcionalidades adicionais.

```bash
sudo -i -u postgres
```

Alternando para a conta postgres.

## Comandos SQL (utilizando PostgreSQL)

Antes de executar qualquer comando `SQL`, precisamos acessar o Postgres. Para isso, executamos:

```bash
psql
```

Isso fará você entrar no prompt do PostgreSQL e, a partir daqui, você estará livre para interagir com o sistema de gerenciamento de banco de dados imediatamente (consultando e alterando dados de tabelas e bancos).

Para sair do prompt do Postgres e voltar ao terminal comum, digite:

```bash
\q
```

### Agora sim, SQL

```sql
CREATE TABLE pessoa (
id serial primary key,
nome varchar(255));
```

O comando CREATE TABLE cria uma tabela, pessoa é um exemplo de nome para sua tabela e dentro dos () vai as suas colunas, como exemplos temos id e nome.

```sql
INSERT INTO TABLE pessoa VALUES (1, "Ingrid");
```

O comando INSERT INTO TABLE insere na tabela pessoa respectivamente os seguintes valores: id=1 e nome=Ingrid.

```sql
SELECT * FROM  pessoa;
```

Seleciona toda a tabela pessoa.

```sql
UPDATE pessoa SET nome = 'Brenda' WHERE id = 1;
```

Atualiza o nome do cliente para Brenda se o Id for igual a 1

```sql
DELETE FROM pessoa WHERE id = 1;
```

Exclui as linhas onde o id é igual a 1 na tabela especificada. Se o id não for especificado, o efeito é excluir todas as linhas da tabela.

## Ferramentas Adicionais

### PgAdmin 3

Para uma interface gráfica de usuário do PostgreSQL, use o seguinte comando:

```bash
sudo apt-get install pgadmin3
```

```bash
sudo su postgres -c psql postgres
```

```bash
ALTER USER postgres WITH PASSWORD 'postgres';
```

### Execute os seguintes comandos

```sql
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
```

