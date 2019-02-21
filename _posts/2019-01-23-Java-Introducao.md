---
layout: post
title: "Introdução"
date: 2018-12-19 13:25:06 -0700
categories: java
---

Neste capítulo, veremos alguns conceitos iniciais da linguagem Java.

## Olá, mundo

Arquivo `Ola.java`:

```java
public class Ola {

  public static void main(String [] args) {
    System.out.println("Ola, mundo");
  }

}
```

Java é uma linguagem orientada a objetos, por isso, todo código é organizado em classes. Neste momento, não precisamos entender o que é uma
classe, veremos isto em mais detalhes nos próximos capítulos.


## Variáveis

Declaramos uma variável informando o tipo de dados que ela poderá receber e seu nome e antes do tipo também podemos especificar o
modificador de acesso (exceto em variáveis que existem dentro de métodos).

__Exemplo:__

``` java
int numero;
String nome;
```

**Nota:** Como a linguagem Java é fortemente tipada, a declaração do tipo é obrigatória.

https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html

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

**Nota:** Por convenção, usamos letras maiúsculas e underscores (`_`) para declarar constantes e assim distingui-las das variáveis.


### Operadores

__Operadores de Igualdade__

| Nome      | Sintaxe | Exemplo  | Significado            |
| --------- | ------- | -------- | ---------------------- |
| Igual     | `==`    | `x == y` | `x` é igual a `y`      |
| Diferente | `!=`    | `x != y` | `x` é diferente de `y` |



__Operadores relacionais__

| Nome      | Sintaxe | Exemplo  | Significado            |
| --------- | ------- | -------- | ---------------------- |
| Maior que | `>` | `x > y` | `x` é maior que `y` |
| Menor que | `<` | `x < y` | `x` é menor que `y` |
| Maior ou igual | `>=` | `x >= y` | `x` é maior ou igual a `y` |
| Menor ou igual | `<=` | `x <= y` | `x` é menor ou igual a `y` |


Opções de operadores aritméticos

![imagemExemplo2](https://lh6.googleusercontent.com/JFFp5IV9c6IivgShCbi9f5NF7bJSPah-06OoAfUbtBEajtPjWtacQUiYYA5g0cR9tzO2ITsCqtXMtmWQG64ND8i6exA795CiJFtAld8R)

Operadores de incremento e decremento

***Exemplo:***

```java
int numero = 5;
numero++; // numero agora tem o valor 6
numero--; // numero agora tem o valor 5
```

Opções de operadores de lógicos

![imagemExemplo3](https://lh4.googleusercontent.com/dHuYPLRnGJUqXvaTPgKg0Jh3yewEU5UGkx6Hk9jHE4VsbQm3l0tWcxD6BcS7ywaHTsbs2g_RiFTjAdJPWAhHUdkwx8alR-EJJZ3PXBbr0w5Chi8Lolb_cLZw6B61DhpxwdTUFSd8)
