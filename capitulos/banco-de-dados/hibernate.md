
# Hibernate

**O que é?**

O Hibernate é um framework utilizado para mapear as classes java que são suas entidades de negócio para tabelas no banco relacional, economizando tempo.

**Bibliotecas do Hibernate e JPA**

Vamos usar o JPA com Hibernate, ou seja, precisamos baixar os JARs no site do Hibernate. O site oficial do Hibernate é o www.hibernate.org, onde você baixa a última versão na seção ORM e Download.

Com o ZIP baixado em mãos, vamos descompactar o arquivo. Dessa pasta vamos usar todos os JARs obrigatórios \(required\). Não podemos esquecer o JAR da especificação JPA que se encontra na pasta jpa.

Para usar o Hibernate e JPA no seu projeto é necessário colocar todos esses JARs no classpath.

O Hibernate vai gerar o código SQL para qualquer banco de dados. Continuaremos utilizando o banco MySQL, portanto também precisamos o arquivo .jar correspondente ao driver JDBC.

**Mapeando uma classe Tarefa para nosso Banco de Dados**

Para isso, continuaremos utilizando a classe que representa uma tarefa:

```java
package br.com.caelum.tarefas.modelo;

public class Tarefa {
    private Long id;
    private String descricao;
    private boolean finalizado;
    private Calendar dataFinalizacao;
}
```

Criamos os getters e setters para manipular o objeto, mas fique atento que só devemos usar esses métodos se realmente houver necessidade.

Essa é uma classe como qualquer outra que aprendemos a escrever em Java. Precisamos configurar o Hibernate para que ele saiba da existência dessa classe e, desta forma, saiba que deve inserir uma linha na tabela Tarefa toda vez que for requisitado que um objeto desse tipo seja salvo. Em vez de usarmos o termo "configurar", falamos em mapear uma classe a tabela.

Para mapear a classe Tarefa, basta adicionar algumas poucas anotações em nosso código. Anotação é um recurso do Java que permite inserir metadados em relação a nossa classe, atributos e métodos. Essas anotações depois poderão ser lidas por frameworks e bibliotecas, para que eles tomem decisões baseadas nessas pequenas configurações.

Para essa nossa classe em particular, precisamos de apenas quatro anotações:

```java
@Entity
public class Tarefa {

    @Id
    @GeneratedValue
    private Long id;
    private String descricao;
    private Boolean finalizado;

    @Temporal(TemporalType.DATE)
    private Calendar dataFinalizacao;

    // métodos...
}
```

`@Entity` indica que objetos dessa classe se tornem "persistivel" no banco de dados.

`@Id` indica que o atributo id é nossa chave primária \(você precisa ter uma chave primária em toda entidade\) e @GeneratedValue diz que queremos que esta chave seja populada pelo banco \(isto é, que seja usado um auto increment ou sequence, dependendo do banco de dados\).

Com `@Temporal` configuramos como mapear um Calendar para o banco, aqui usamos apenas a data \(sem hora\), mas poderíamos ter usado apenas a hora \(TemporalType.TIME\) ou timestamp \(TemporalType.TIMESTAMP\). Essas anotações precisam dos devidos imports, e pertencem ao pacote javax.persistence.

Mas em que tabela essa classe será gravada? Em quais colunas? Que tipo de coluna? Na ausência de configurações mais específicas, o Hibernate vai usar convenções: a classe Tarefa será gravada na tabela de nome também Tarefa, e o atributo descricao em uma coluna de nome descricao também!

Se quisermos configurações diferentes das convenções, basta usarmos outras anotações, que são completamente opcionais. Por exemplo, para mapear o atributo dataFinalizacao numa coluna chamada data\_finalizado faríamos:

```java
@Column (name = "data_finalizado", nullable = true)
private Calendar dataFinalizacao;
```

Para usar uma tabela com o nome tarefas:

```java
@Entity 
@Table (name="tarefas")
public class Tarefa
```

## EXERCÍCIOS DE FIXAÇÃO

### Primeiros passos para mapear uma tabela simples com hibernate

Imagine que temos o hibernate configurado, o próximo passo é realizar o mapeamento das classes ás tabelas do banco de dados.

1. Qual é a anotação que usaremos para indicar que a classe será utilizada como uma entidade, ou seja, que os dados serão "persistiveis" pelo banco de dados?
2. Qual anotação é utilizada para indicar o identificador único da tabela?
3. Qual a notação que informa que queremos que esta chave seja populada pelo banco?

