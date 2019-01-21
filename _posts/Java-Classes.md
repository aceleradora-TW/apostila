---
layout: post
title: "Classes"
date: 2018-12-19 13:25:06 -0700
categories: java
---
# Java
## Declaração e utilização de classes	

No Java o seu primeiro código será escrito dentro de um método de uma classe. Uma classe é um elemento do código Java que utilizamos para representar objetos do mundo real. Podemos informar a visibilidade da classe, que pode ser ``public``, ``private`` ou ``default``. Utilizamos a palavra reservada ``class`` seguida pelo nome da classe. Logo após, entre chaves, definimos os elementos a ela relacionados: atributos, construtores e métodos.

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

Chama-se instância de uma classe, um objeto cujo comportamento e estado são definidos pela classe. 

```
Carro carrinho = new Carro();
```
**EXTENDS**

Quando uma classe precisa herdar características de outra, fazemos uso de herança. Em Java, é representado pela palavra-chave ``extends``. Todos os atributos e métodos não-privados serão herdados pela outra classe. Por isso, é comum dizer que a classe herdada é pai da classe que herdou seus elementos.

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
A palavra-chave ``extends`` foi utilizada na declaração da classe Computador. Assim, além do atributo processador, devido à herança, a classe Computador também terá os atributos valorCompra e valorVenda, sem que seja necessário declará-los novamente, sem repetir código.

**IMPLEMENTS**

Quando uma classe precisa implementar os métodos de uma interface, utiliza-se a palavra reservada ``implements``:		

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
A anotação ``@Override`` explicita os métodos que foram codificados/sobrescritos.

**Nota:** Podemos implementar várias interfaces. Para isso, basta separá-las por vírgula.

Também é possível utilizar ``extends`` conjuntamente com ``implements`. Trata-se de um recurso útil quando deseja-se tornar uma classe mais específica e implementar novos comportamentos definidos em interfaces.

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

Na linguagem Java, declaramos uma variável informando o tipo de dados que ela poderá receber e seu nome e antes do tipo também podemos especificar o modificador de acesso.

***Exemplo:***
```
private int numero;
public String nome;
```
**Nota:** Como a linguagem Java é fortemente tipada, a declaração do tipo é obrigatória.

## Constantes

Uma constante é declarada quando precisamos lidar com dados que não devem ser alterados durante a execução do programa. Para isso, utilizamos a palavra reservada ``final`` para que a variável seja inicializada uma única vez.

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

**ENUM**

Em Java, uma enum é um tipo no qual declaramos um conjunto de valores constantes pré-definidos. usamos a palavra chave ``enum`` que antecede seu nome.

***Exemplo:***

```java
public enum Turno {
    MANHA, TARDE, NOITE;
}
```

Por serem os campos de uma enum constantes, seus nomes são escritos em letras maiúsculas.

Para atribuir um desses valores a uma variável podemos fazer como no código abaixo:

***Exemplo:***

`
Turno turno = Turno.MANHA;
`

**Construtores em java**

***Para que servem?***

Métodos construtores servem para construir um objeto da classe. Ao contrário de outros métodos, um construtor não pode ser chamado diretamente. Para isso usamos a palavra ``new`` para criar o objeto e então atribuí-lo a uma variável de mesmo tipo. 

**Os 4 pilares da Programação Orientada a Objetos**
***Abstração***

É utilizada para a definição de entidades do mundo real. Sendo onde são criadas as classes. Essas entidades são consideradas tudo que é real, tendo como consideração as suas características e ações.

![exemploImagem](https://lh5.googleusercontent.com/KsUZuY1T5eIEfjKn9Pdf5zzpTHsuCRF9V8Zd_E0Uf9tkKpiQVEJSsiD08OhRMvj6rIOUkH3_o7avmTJMXlqsVx6aPl_yorXLTnw4eeg0uB4DtY8zp__StPNB9qfeHC1FiU1YQlvd)

***Encapsulamento***

É a técnica utilizada para esconder uma ideia, ou seja, não expor detalhes internos para o usuário, tornando partes do sistema mais independentes possível. Por exemplo, quando um controle remoto estraga apenas é trocado ou consertado o controle e não a televisão inteira. Nesse exemplo do controle remoto, acontece a forma clássica de encapsulamento, pois quando o usuário muda de canal não se sabe que programação acontece entre a televisão e o controle para efetuar tal ação.

![Explicação](https://lh6.googleusercontent.com/fe5tbRM9vzg0cpzT442alHz1anacJK4qLBOB1z4Gf-PxUCM9YXvL1PqNOR4nQYqGl3m8jeY1MIYWJmsMNgVYBD8ubJruT8sXIf7qVwc)

***Herança***

Na Programação Orientada a Objetos o significado de herança tem o mesmo significado para o mundo real. Assim como um filho pode herdar alguma característica do pai, na Orientação a Objetos é permitido que uma classe possa herdar atributos e métodos da outra, tendo apenas uma restrição para a herança. Os modificadores de acessos das classes, métodos e atributos só podem estar com visibilidade ``public`` e ``protected`` para que sejam herdados.

![imagem](https://lh4.googleusercontent.com/R93m_BhnAlI0L8iQVV_A1wCd99BBrGGGrgaSdwZDF2MN_vKSHb0XPt6J2E4qs4DMUb5VhWxHHS1U2oLZ-jW5zbgnvlTfJ9JGtZj5OFsjyYp6Z43ZgbW6f7HtwXmPPOCL00zaj-fZ)

**Polimorfismo**

O polimorfismo consiste na alteração do funcionamento interno de um método herdado de um objeto pai.

***Exemplo:***

![exemplo](https://lh3.googleusercontent.com/D4Ia9jLgKQ__CX7RtXIjPgS-Wgn0qO-fwV2F-vcuLcp6ckrArMioa6ZR4lyrsd9kWEawTEq_NRsx0JlMtf5urViGvmveo9bXQsqvYfBGMznKsyfGqTNORsbmABTNoccoat3qD77O)
