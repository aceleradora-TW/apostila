---
layout: post
title: "Introdução"
date: 2018-12-19 13:25:06 -0700
categories: java
---

## Classes

No Java o seu primeiro código será escrito dentro de um método de uma classe. Uma classe é um elemento do código Java que utilizamos para
representar objetos do mundo real. Podemos informar a visibilidade da classe, que pode ser ``public``, ``private`` ou ``default``.
Utilizamos a palavra reservada ``class`` seguida pelo nome da classe. Logo após, entre chaves, definimos os elementos a ela relacionados:
atributos, construtores e métodos.

***Exemplo:***

```java
public class Carro {

  String marca;
  int quantidadeDePneus;
  //Tipos De Variáveis e atributos


  public Carro() {
    //construtor sem parâmetros
  }

  public void andar() {
    //método
  }
}
```

### Construtores

***Para que servem?***

Métodos construtores servem para construir um objeto da classe. Ao contrário de outros métodos, um construtor não pode ser chamado
diretamente. Para isso usamos a palavra ``new`` para criar o objeto e então atribuí-lo a uma variável de mesmo tipo.

***Exemplo de instanciação de classe:***

Chama-se instância de uma classe, a criação um objeto (através do método construtor) cujo comportamento e estado são definidos pela classe.

```java
Carro carrinho = new Carro();
```

## Extends

Quando uma classe precisa herdar características de outra, fazemos uso de herança. Em Java, é representado pela palavra-chave ``extends``.
Todos os atributos e métodos não-privados serão herdados pela outra classe. Por isso, é comum dizer que a classe herdada é pai da classe que
herdou seus elementos.

**Nota:** Em Java não existe herança múltipla. Assim, uma classe pode herdar apenas de outra.

***Exemplo:***

```java
public class Produto {

  public double valorCompra;
  public double valorVenda;

  public class Computador extends Produto {
    private String processador;

  }
}
```

A palavra-chave ``extends`` foi utilizada na declaração da classe Computador. Assim, além do atributo processador, devido à herança, a
classe Computador também terá os atributos valorCompra e valorVenda, sem que seja necessário declará-los novamente, sem repetir código.

## Implements

Quando uma classe precisa implementar os métodos de uma interface, utiliza-se a palavra reservada ``implements``:

***Exemplo:***


Considerando a interface ``IProduto``:

```java
public interface IProduto {

  double calculaFrete();

}
```

Podemos ter a classe ``Televisao`` implementando-a:

```java
public class Televisao implements IProduto {
  private double peso;
  private double altura;

  @Override
    public double calculaFrete() {
      //código para cálculo do frete
    }
}
```

A anotação ``@Override`` explicita os métodos que foram codificados/sobrescritos.

**Nota:** Podemos implementar várias interfaces. Para isso, basta separá-las por vírgula.

Também é possível utilizar ``extends`` conjuntamente com ``implements``. Trata-se de um recurso útil quando deseja-se tornar uma classe mais
específica e implementar novos comportamentos definidos em interfaces.

***Exemplo:***

```java
public class ClasseFilha extends ClassePai implements NomeInterface {
  // Atributos, construtores e métodos da ClasseFilha
  //Métodos implementados da interface
}
```

**Regras para nomeação de classes:**

* Manter o nome simples e descritivo;
* Usar palavras inteiras, isto é, sem siglas e abreviações;
* A primeira letra de cada palavra devem ser maiúsculas. (camel casing)

## Variáveis

Na linguagem Java, declaramos uma variável informando o tipo de dados que ela poderá receber e seu nome e antes do tipo também podemos
especificar o modificador de acesso (exceto em variáveis que existem dentro de métodos).

***Exemplo:***

``` java
private int numero;
public String nome;
```

**Nota:** Como a linguagem Java é fortemente tipada, a declaração do tipo é obrigatória.

## Constantes

Uma constante é declarada quando precisamos lidar com dados que não devem ser alterados durante a execução do programa. Para isso,
utilizamos conjuntamente as palavra reservadas ``final`` e ``static``.

***Exemplo:***

``` java
public static final float PI = 3.14;
public static final String MEU_NOME = "Cassia";
```

* A palavra ``final`` indica que a variável não pode ter seu valor modificado.
* A palavra ``static`` indica que todos os objetos de uma classe compartilharão o mesmo valor.

**Nota:** Por convenção, usamos letras maiúsculas e underscores (`_`)para declarar constantes e assim distingui-las das variáveis.

## Operadores

Como o próprio nome diz, os operadores permitem executar operações sobre um ou dois __valores primitivos__.

Alguns links da documentação oficial do Java:

- [Introdução a operadores Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html)

- [Resumo sobre operadores](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html)

__Operador de atribuição__

Pode ser que isto passe despercebido, mas ao atribuir um valor à uma variável, estamos utilizando um operador, o operador de atribuição (`=`):

```java
int cinco = 5;
```

__Operadores de Igualdade__

Os operadores de igualdade são utilizados para fazer a comparação de dois valores, ou seja, utilizamos estes operadores quando precisamos saber se um valor é `igual`, `diferente`, `maior` ou `menor` do que outro:

| Nome      | Sintaxe | Exemplo  | Significado            |
| --------- | ------- | -------- | ---------------------- |
| Igual     | `==`    | `x == y` | `x` é igual a `y`      |
| Diferente | `!=`    | `x != y` | `x` é diferente de `y` |
| Maior que | `>` | `x > y` | `x` é maior que `y` |
| Menor que | `<` | `x < y` | `x` é menor que `y` |
| Maior ou igual | `>=` | `x >= y` | `x` é maior ou igual a `y` |
| Menor ou igual | `<=` | `x <= y` | `x` é menor ou igual a `y` |

 O uso de operadores de igualdade resulta em um valor booleano, o que permite utilizar estes operadores de diferentes maneiras:

Podemos utilizá-los diretamente dentro de estruturas condicionais:

``` java
if (5 > 2) {
  System.out.println("5 eh maior que 2");
} else {
  System.out.println("5 nao eh maior que 2");
}
```

Ou podemos guardar o resultado em uma variável, o que nos ajuda escrever código de uma maneira um pouco mais legível em algumas situações:

```java
boolean cincoEhMaiorQueDois = 5 > 2;

if (cincoEhMaiorQueDois) {
   System.out.println("5 eh maior que 2");
} else {
  System.out.println("5 nao eh maior que 2");
}
```

__Operadores Condicionais__

Operadores condicionais são utilizados em valores booleanos. Eles são úteis quando precisamos verificar mais de uma condição ou precisamos inverter o valor de um booleano (trocar de `true` para `false` ou vice-versa):

__And (&&)__:

Em inglês a palavra "and" é equivalente ao "e" do português (como na frase Maria `e` João), logo, este operador verifica duas condições e resulta em verdadeiro somente se as duas forem verdadeiras, caso contrário, resulta em falso:

``` java
if (vaiChover == true && ehSexta == true) {
  System.out.println("Hoje irei embora mais cedo, pois eh sexta E esta chovendo.");
} else {
  System.out.println("Hoje ficarei até mais tarde.");
}
```

No código acima, a pessoa só iria para casa somente se fosse sexta e fosse chover.

__Or (&#124;&#124;)__:

Em inglês a palavra "or" significa "ou", logo, este operador verifica duas condições e resulta em verdadeiro se pelo menos uma das duas for verdadeira, e, somente caso as duas sejam falsas, resulta em falso:

``` java
if (vaiChover == true || ehSexta == true) {
  System.out.println("Hoje irei embora mais cedo, pois eh sexta ou esta chovendo.");
} else {
  System.out.println("Hoje ficarei até mais tarde.");
}
```

No código acima, a pessoa iria para casa se fosse chover, independentemente do dia da semana. Ou, caso fosse sexta mas não estivesse
chovendo, ela também iria para casa.


__Not (!)__:

Em inglês, "not" significa "não" ou negação. Este operador inverte o valor booleano de uma expressão ou variável:

Expressão:

```java
boolean naoEhCincoNemMaiorQueDez = !(numero == 5 || numero > 10)
```

Variável:

```java
boolean verdade = true;
boolean mentira = !verdade;
```

__Exemplo de uso:__

Temos que escrever um programa que valida o embarque de passageiros em um avião. O programa só deve permitir pessoas maiores de idade `e` que possuam passaporte. Caso a pessoa seja maior de idade mas não possua passaporte o sistema deve notificá-la. Caso a pessoa seja menor de idade, o programa deve notificá-la para estar acompanhada dos pais:

```java

public void verificaEmbarque(int idade, boolean possuiPassaporte) {
  boolean ehMaiorDeIdade = idade >= 18;

  if (ehMaiorDeIdade && possuiPassaporte) {
    System.out.println("Pode embarcar");
  } else if (ehMaiorDeIdade && !possuiPassaporte) {
    System.out.println("Nao pode embarcar. Apresente o passaporte.");
  } else if (!ehMaiorDeIdade) {
    System.out.println("Nao pode embarcar. Venha com seus pais.");
  }
}

```

__Operadores Numéricos__

Os operadores numéricos servem para executar operações com números. Temos dois tipos de operadores numéricos:

__Binários__

São os operadores que executam operações entre __dois__ números:

| Nome      | Sintaxe | Exemplo  | Resultado |
| --------- | ------- | -------- | --------- |
| Soma | `+` | `1 + 1` | `2` |
| Subtração | `-` | `2 - 2` | `0` |
| Multiplicação | `*` | `2 * 2` | `4` |
| Divisão | `/` | `4 / 2` | `2` |
| Módulo | `%` | `4 % 2` | `0` |

__Exemplos de uso__

Podemos utilizá-los para criar uma calculadora em Java:

```java
public class Calculadora {
    public int soma(int a, int b) {
        return a + b;
    }

    public int subtrai(int a, int b) {
        return a - b;
    }

    public int multiplica(int a , int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        return a / b;
    }
}
```

__Unários__

São operadores que executam operações com apenas __um__ número. Estes operadores não funcionam diretamente em números literais, apenas variáveis (veja os exemplos para entender isto melhor):

| Nome      | Sintaxe |
| --------- | ------- |
| Incrementa | `++` |
| Decrementa | `--` |
| Acumula soma | `+=` |
| Acumula multiplicação| `*=` |
| Acumula subtração| `-=` |
| Acumula divisão| `/=` |


**Exemplo:**

```java

5++; // nao funciona

int numero = 4;
numero++; // numero agora tem o valor 5
numero--; // numero agora tem o valor 4
numero += 2; // numero agora tem o valor 6
numero -= 2; // numero agora tem o valor 4
numero *= 2; // numero agora tem o valor 8
numero /= 2; // numero agora tem o valor 4
```

## Enums

Em Java, uma enum é um tipo especial de classe no qual declaramos um conjunto de valores constantes pré-definidos. usamos a palavra chave
``enum`` que antecede seu nome.

***Exemplo:***

```java
public enum Turno {
  MANHA, TARDE, NOITE;
}
```

Por serem os campos de uma enum constantes, seus nomes são escritos em letras maiúsculas.

Para atribuir um desses valores a uma variável podemos fazer como no código abaixo:

***Exemplo:***

```java
Turno turno = Turno.MANHA;
```

**Por que usar enums?**

Enums são extremamente úteis quando precisamos representar um conjunto restrito de valores de uma maneira mais segura em vez de usar apenas
Strings. Eles nos garantem que o compilador irá aceitar somente o conjunto de possibilidades que nós definimos, o que deixa o código menos
propenso a erros. Vejamos um exemplo à respeito disso.

Precisamos fazer um programa para gerenciar as turmas de uma escola. Para isso, criamos primeiro uma classe para representar as turmas:

```java

public class Turma {
  private String nome;
  private String turno;

  public String getTurno() {
    return turno;
  }
}

```

Uma das funcionalidades do programa é informar o horário de início das turmas de acordo com seus turnos. Para isso, implementamos o
seguinte:

```java

public class GestaoDeTurmas {

  public void mostraHorarioDaTurma(Turma turma) {
    if (turma.getTurno().equals("manha")) {
      System.out.println("As aulas comecam as 7h30min");
    } else if (turma.getTurno().equals("tarde")) {
      System.out.println("As aulas comecam as 13h30min");
    } else {
      System.out.println("As aulas comecam as 18h30min");
    }

  }
}

```

Não temos como garantir a integridade dos valores que receberemos, ou seja, pode ser que as nossas usuárias escrevam ``manha``, ``manhã``,
``Manhã``, ``De tardezinha`` para representar o turno, o que causará comportamentos estranhos.

Vejamos como os enums podem ajudar a garantir um comportamento mais previsível:

Primeiro, criamos um enum para representar os turnos que o programa suporta:

```java
public enum Turno {
  MANHA, TARDE, NOITE;
}
```

Depois, mudamos a nossa classe `Turma` para que ela utilize o enum:

```java
public class Turma {
  private String nome;
  private Turno turno;

  public Turno getTurno() {
    return turno;
  }
}
```

Agora, a ``GestaoDeTurmas`` pode ser um pouco mais precisa, utilizando somente os tipos que o programa aceita e informando o usuário caso a
informação recebida seja inválida:

```java

public class GestaoDeTurmas {

  public void mostraHorarioDaTurma(Turma turma) {
    if (turma.getTurno() == Turno.MANHA) {
      System.out.println("As aulas comecam as 7h30min");
    } else if (turma.getTurno() == Turno.TARDE) {
      System.out.println("As aulas comecam as 13h30min");
    } else {
      System.out.println("As aulas comecam as 18h30min");
    }
  }
}

```



## Os 4 pilares da Programação Orientada a Objetos

***Abstração***

É utilizada para a definição de entidades do mundo real. Sendo onde são criadas as classes. Essas entidades são consideradas tudo que é
real, tendo como consideração as suas características e ações.

![exemploImagem](https://lh5.googleusercontent.com/KsUZuY1T5eIEfjKn9Pdf5zzpTHsuCRF9V8Zd_E0Uf9tkKpiQVEJSsiD08OhRMvj6rIOUkH3_o7avmTJMXlqsVx6aPl_yorXLTnw4eeg0uB4DtY8zp__StPNB9qfeHC1FiU1YQlvd)

***Encapsulamento***

É a técnica utilizada para esconder uma ideia, ou seja, não expor detalhes internos para o usuário, tornando partes do sistema mais
independentes possível. Por exemplo, quando um controle remoto estraga apenas é trocado ou consertado o controle e não a televisão inteira.
Nesse exemplo do controle remoto, acontece a forma clássica de encapsulamento, pois quando o usuário muda de canal não se sabe que
programação acontece entre a televisão e o controle para efetuar tal ação.

![Explicação](https://lh6.googleusercontent.com/fe5tbRM9vzg0cpzT442alHz1anacJK4qLBOB1z4Gf-PxUCM9YXvL1PqNOR4nQYqGl3m8jeY1MIYWJmsMNgVYBD8ubJruT8sXIf7qVwc)

***Herança***

Na Programação Orientada a Objetos o significado de herança tem o mesmo significado para o mundo real. Assim como um filho pode herdar
alguma característica do pai, na Orientação a Objetos é permitido que uma classe possa herdar atributos e métodos da outra, tendo apenas uma
restrição para a herança. Os modificadores de acessos das classes, métodos e atributos só podem estar com visibilidade ``public`` e
``protected`` para que sejam herdados.

![imagem](https://lh4.googleusercontent.com/R93m_BhnAlI0L8iQVV_A1wCd99BBrGGGrgaSdwZDF2MN_vKSHb0XPt6J2E4qs4DMUb5VhWxHHS1U2oLZ-jW5zbgnvlTfJ9JGtZj5OFsjyYp6Z43ZgbW6f7HtwXmPPOCL00zaj-fZ)

## Polimorfismo

O polimorfismo consiste na alteração do funcionamento interno de um método herdado de um objeto pai.

***Exemplo:***

![exemplo](https://lh3.googleusercontent.com/D4Ia9jLgKQ__CX7RtXIjPgS-Wgn0qO-fwV2F-vcuLcp6ckrArMioa6ZR4lyrsd9kWEawTEq_NRsx0JlMtf5urViGvmveo9bXQsqvYfBGMznKsyfGqTNORsbmABTNoccoat3qD77O)

# EXERCÍCIOS DE FIXAÇÃO

Clone o projeto do GitHub link: https://github.com/aceleradora-TW/laboratorio-oo-java

Faça os exercícios e deixe os testes passar

**Divirta-se!**
