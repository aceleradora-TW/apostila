---
layout: post
title: "Classes"
date: 2018-12-19 13:25:06 -0700
categories: java
---
# Java
## Declaração e utilização de classes	

No Java o seu primeiro código será escrito dentro de um método de uma classe.Uma classe é um elemento do código Java que utilizamos para representar objetos do mundo real. Podemos informar a visibilidade da classe, que pode ser public, private ou default.Utilizamos a palavra reservada class seguida pelo nome da classe. Logo após, entre chaves, definimos os elementos a ela relacionados: atributos, construtores e métodos.

***Exemplo:***

```java
public class Carro {
	//Visibilidade da classe
  
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
***Exemplo de instanciação de classe:***

chama-se instância de uma classe, um objeto cujo comportamento e estado são definidos pela classe. 

```
Carro carrinho= new Carro();
```
**EXTENDS**

Quando uma classe precisa herdar características de outra, 
fazemos uso de herança. Em Java, é representado pela palavra-chave EXTENDS. todos os atributos e métodos não-privados serão herdados pela outra classe. Por isso, é comum dizer que a classe herdada é pai da classe que herdou seus elementos.

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
A palavra-chave Extends foi utilizada na declaração da classe Computador. Assim, além do atributo processador, devido à herança, a classe Computador também terá os atributos valorCompra e valorVenda, sem que seja necessário declará-los novamente, sem repetir código.

**IMPLEMENTS**

Quando uma classe precisa implementar os métodos de uma interface, utiliza-se a palavra reservada IMPLEMENTS:		

***Exemplo:***

```java
public interface IProduto { 
    public double calculaFrete();
    
public class Televisao implements IProduto {
        private double peso;										
        private double altura;
        
@Override
     	public double calculaFrete() {
            //código para cálculo do frete
        }
    }
}
```
A anotação __@override__ explicita os métodos que foram codificados/sobrescritos.

**Nota:** Podemos implementar várias interfaces. Para isso, basta separá-las por vírgula.

Também é possível utilizar __extends__ conjuntamente com __implements__. Trata-se de um recurso útil quando deseja-se tornar uma classe mais específica e implementar novos comportamentos definidos em interfaces.

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
* A primeira letra de cada palavra devem ser maiúsculas.

## Variáveis

Na linguagem Java, declaramos uma variável informando o tipo de dados que ela poderá receber e seu nome e antes do tipo também podemos especificar o modificador de acesso.

***Exemplo:***
```
private int numero;
public String nome;
```
**Nota:** Como a linguagem Java é fortemente tipada, a declaração do tipo é obrigatória.

## Constantes

Uma constante é declarada quando precisamos lidar com dados que não devem ser alterados durante a execução do programa. Para isso, utilizamos a palavra reservada __
final__ para que a variável seja inicializada uma única vez.

***Exemplo:***

```
 final float PI = 3.14;
 final String meuNome = “Cássia”;
```

**Nota:** Por convenção, usamos letras maiúsculas para declarar constantes e assim distingui-las das variáveis.

### Operadores de igualdade e operadores relacionais

![imagemExemplo](https://lh5.googleusercontent.com/UoOIUINJROkYArVhGTkN_uaLCWP9ibHR8C-7vynJFd0zjF4o_0J_bOq4KLIBPLt8Y6cP8fP70P2hY1tCOL7ymDl24Ll8W-vHY3rXhCTcWd32AM5deeIlwHehcbsfkzWkfOOHThcb)

Opções de operadores aritméticos

![imagemExemplo2](https://lh6.googleusercontent.com/JFFp5IV9c6IivgShCbi9f5NF7bJSPah-06OoAfUbtBEajtPjWtacQUiYYA5g0cR9tzO2ITsCqtXMtmWQG64ND8i6exA795CiJFtAld8R)

Operadores de incremento e decremento

***Exemplo:***

```java
int numero = 5;
numero++;
numero--;
    //numero continuará sendo 5.
```

Opções de operadores de lógicos

![imagemExemplo3](https://lh4.googleusercontent.com/dHuYPLRnGJUqXvaTPgKg0Jh3yewEU5UGkx6Hk9jHE4VsbQm3l0tWcxD6BcS7ywaHTsbs2g_RiFTjAdJPWAhHUdkwx8alR-EJJZ3PXBbr0w5Chi8Lolb_cLZw6B61DhpxwdTUFSd8)
