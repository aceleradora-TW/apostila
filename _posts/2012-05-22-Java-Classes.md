---
layout: post
title: "Classes"
date: 2018-12-19 13:25:06 -0700
categories: java
---

No Java, o seu primeiro código será escrito dentro de um método de uma classe. Uma classe é um elemento do código Java que utilizamos para representar objetos do mundo real.

Podemos informar a visibilidade da classe, que pode ser `public`, `private` ou `default`. Utilizamos a palavra reservada `class` seguida pelo nome da classe. Logo após, entre chaves, definimos os elementos a ela relacionados:
- atributos
- construtores
- métodos

__Exemplo de classe:__

```java
public class Carro {
  String marca;
  int quantidadeDePneus;

  public Carro() {
  }

  public void andar() {
  }
}
```
