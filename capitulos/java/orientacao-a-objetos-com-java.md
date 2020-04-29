---
title: Introdução ao Java
date: '2018-12-19 13:25:06 -0700'
---

# Orientação a Objetos

A orientação a objetos é um paradigma de programação que organiza o código usando o conceito de objetos e as interações entre estes. Objeto
pode ser entendido como algo que contém dados e comportamento.

## O que são paradigmas de programação?

Paradigmas de programação são uma forma de classificar linguagens de programação com base em suas funcionalidades. 

Os paradigmas mais comuns são os seguintes:

- **Imperativo:** o(a) programador(a) programa detalhademente como as instruções devem executar.
  - **Procedural:** Agrupa instruções em procedimentos (funções) reutilizáveis
  - **Orientado a Objetos:** Agrupa funções e dados em unidades chamadas objetos

- **Declarativo:** 
in which the programmer merely declares properties of the desired result, but not how to compute it
  - **Funcional:** in which the desired result is declared as the value of a series of function applications,

> Fonte: [Wikipédia, Programming Paradigms](https://en.wikipedia.org/wiki/Programming_paradigm)

Hoje em dia, é muito comum uma linguagem de programação permitir a organização do código em mais de um paradigma ao mesmo tempo, misturando
elementos de diferentes paradigmas nas funcionalidades da linguagem.

## Classes

No Java o seu código sempre será escrito dentro de classes e métodos. Uma classe é um elemento do código Java que utilizamos para
representar objetos do mundo real. Na orientação a objetos, sempre tentamos pensar em como abstrair conceitos do mundo real dentro do
código.

Na orientação a objetos (ou a até mesmo na programação em geral), sempre teremos dois elementos:

* Dados (variáveis, também chamadas de atributos de um objeto)
* Comportamento (funções, também chamadas de métodos de um objeto)

Vejamos por exemplo uma classe que representa um carro:

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


### Atributos

Quando se está estudando e utilizando orientação a objetos, muito ouve-se falar dos tais atributos. Estes nada mais são que variáveis que
pertencem a uma classe. No caso da nossa classe carro, temos dois atributos:

* Marca
* Quantidade de pneus

Podemos informar a visibilidade da classe, que pode ser `public`, `private` ou `default`. Utilizamos a palavra reservada `class` seguida
pelo nome da classe. Logo após, entre chaves, definimos os elementos a ela relacionados: atributos, construtores e métodos.

### Métodos

### Construtores

_**Para que servem?**_

Métodos construtores servem para construir um objeto da classe. Ao contrário de outros métodos, um construtor não pode ser chamado
diretamente. Para isso usamos a palavra `new` para criar o objeto e então atribuí-lo a uma variável de mesmo tipo.

_**Exemplo de instanciação de classe:**_

Chama-se instância de uma classe, a criação um objeto \(através do método construtor\) cujo comportamento e estado são definidos pela
classe.

```java
Carro carrinho = new Carro();
```


### Atirei o pau no gato, orientado a objetos

Conforme mencionado, o intuito da orientação a objetos é permitir que raciocinemos sobre nosso código utilizando a noção de objetos (uma
unidade do código que contém atributos e comportamentos) e a relação entre eles. Desta forma, podemos abstrair mais facilmente conceitos da
vida real para o código. Podemos usar a  música "Atirei o pau no gato" como um exemplo de como transportar estes conceitos para o código:

    (Eu) Atirei o pau no gato
    Mas o gato
    Não morreu
    Dona Chica
    Admirou-se
    Do berro
    Que o gato deu
    Miau!

Como representar esta música em um programa organizado com orientação a objetos?

#### Abstração

A abstração é o ato de representar elementos do mundo real dentro do código utilizando recursos de orientação a objetos. 

__O que queremos representar__

Vejamos quais elementos da música podemos representar com objetos no código:

- __Pessoas:__ Eu, Dona Chica
- __Objetos inanimados:__ Pau
- __Animais:__ Gato
- __Eventos:__ Crime (atirar o pau no gato), Berro (miau)

É interessante observar que apesar do nome, os objetos não necessariamente precisam ser algo visível, eles podem ser coisas abstratas, como
os eventos, por exemplo.

__Detalhando nossos objetos__

Também faz parte do processo de abstração lapidar nossos objetos, decidindo quais detalhes são relevantes para o nosso sistema e quais não
são.


Out

Classes:

Pessoa

__Atributos:__

- Nome

__Comportamentos:__

- Atirar objetos em animais
- Admirar-se

Objetos:
Eu
Dona Chica



```java
public class Objeto {
  private String nome;
  private float peso;

  public Objeto(String nome, float peso) {
      this.nome = nome;
      this.peso = peso;
  }

  public String getNome() {
      return nome;
  }

  public float getPeso() {
      return peso;
  }
}
```

```java
public class Pessoa {
  String nome;

  public Pessoa(String nome) {
      this.nome = nome;
  }

  public Crime atirarObjetoEmAnimal(Objeto objeto, Animal alvo) {
      return new Crime(this, alvo, objeto);
  }

  public boolean estaAdmirada(Berro berro) {

      if (berro.foiAlto()) {
          return true;
      }

      return false;
  }

  public String getNome() {
      return nome;
  }
}
```

```java
public class Crime {
  private static final float TRINTA_PORCENTO = 0.3f;
  private Pessoa agressora;
  private Animal vitima;
  private Objeto arma;
  private Berro berro;

  public Crime(Pessoa agressora, Animal vitima, Objeto arma) {
      this.agressora = agressora;
      this.vitima = vitima;
      this.arma = arma;
      float proporcaoDoPesoDaArma = arma.getPeso() / vitima.getPeso();

      String somDoBerro;
      if (vitima.getNome().equals("Gato")) {
          somDoBerro = "MIAAAAAAAAAAAAU";
      } else {
          somDoBerro = "Nao identificado";
      }

      if (proporcaoDoPesoDaArma > TRINTA_PORCENTO) {
          vitima.decrementaVida();
          berro = new Berro(true, somDoBerro);
      } else {
          berro = new Berro(false, somDoBerro);
      }
  }

  public Berro getBerro() {
      return berro;
  }

  public String getNomeDaAgressora() {
      return agressora.getNome();
  }

  public String getNomeDaVitima() {
      return vitima.getNome();
  }

  public boolean foiFatal() {
      return !vitima.estaVivo();
  }

  public String getNomeDaArma() {
      return arma.getNome();
  }
}
```

```java
public class Berro {
    static final Berro ALTO = new Berro(true);
    static final Berro BAIXO = new Berro(false);

    private boolean alto;

    private Berro(boolean alto) {
        this.alto = alto;
    }

    boolean foiAlto() {
        return alto;
    }
}
```

```java
public class Animal {
    private String nome;
    private float peso;
    private int vidas;

    public Animal(String nome, float peso, int vidas) {
        this.nome = nome;
        this.peso = peso;
        this.vidas = vidas;
    }
}
```

```java
public class AtireiPauNoGato {
    public static void main(String[] args) {
        Objeto pau = new Objeto("Pau", 2);
        Animal gato = new Animal("Gato", 3, 9);
        Pessoa eu = new Pessoa("Eu");
        Pessoa donaChica = new Pessoa("Dona Chica");

        Crime crime = eu.atirarObjetoEmAnimal(pau, gato);

        System.out.println(String.format("%s atirei o %s no %s",
                crime.getNomeDaAgressora(),
                crime.getNomeDaArma(),
                crime.getNomeDaVitima()
        ));

        if (crime.foiFatal()) {
            System.out.println("O " + crime.getNomeDaVitima() + " faleceu");
        } else {
            System.out.println("Mas o " + crime.getNomeDaVitima() + " não morreu");
        }

        boolean donaChicaEstaAdmirada = donaChica.estaAdmirada(crime.getBerro());

        if (donaChicaEstaAdmirada) {
            System.out.println(donaChica.getNome() + " admirou-se");
            System.out.println("Do berro, do berro que o " + gato.getNome() + " deu");
        } else {
            System.out.println(donaChica.getNome() + "Não se admirou");
        }

        System.out.println(crime.getBerro().getSom());

    }
}
```

Resultado:

    Eu atirei o Pau no Gato
    Mas o Gato não morreu
    Dona Chica admirou-se
    Do berro, do berro que o Gato deu
    MIAAAAAAAAAAAAU


### Herança

Quando uma classe precisa herdar características de outra, fazemos uso de herança. Em Java, é representado pela palavra-chave `extends`.
Todos os atributos e métodos não-privados serão herdados pela outra classe. Por isso, é comum dizer que a classe herdada é pai da classe que
herdou seus elementos.

**Nota:** Em Java não existe herança múltipla. Assim, uma classe pode herdar apenas de outra.

_**Exemplo:**_

```java
public class Produto {

  public double valorCompra;
  public double valorVenda;

  public class Computador extends Produto {
    private String processador;

  }
}
```

A palavra-chave `extends` foi utilizada na declaração da classe Computador. Assim, além do atributo processador, devido à herança, a classe
Computador também terá os atributos valorCompra e valorVenda, sem que seja necessário declará-los novamente, sem repetir código.

### Interfaces

Quando uma classe precisa implementar os métodos de uma interface, utiliza-se a palavra reservada `implements`:

_**Exemplo:**_

Considerando a interface `IProduto`:

```java
public interface IProduto {

  double calculaFrete();

}
```

Podemos ter a classe `Televisao` implementando-a:

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

A anotação `@Override` explicita os métodos que foram codificados/sobrescritos.

**Nota:** Podemos implementar várias interfaces. Para isso, basta separá-las por vírgula.

Também é possível utilizar `extends` conjuntamente com `implements`. Trata-se de um recurso útil quando deseja-se tornar uma classe mais
específica e implementar novos comportamentos definidos em interfaces.

_**Exemplo:**_

```java
public class ClasseFilha extends ClassePai implements NomeInterface {
  // Atributos, construtores e métodos da ClasseFilha
  //Métodos implementados da interface
}
```

**Regras para nomeação de classes:**

* Manter o nome simples e descritivo;
* Usar palavras inteiras, isto é, sem siglas e abreviações;
* A primeira letra de cada palavra devem ser maiúsculas. \(camel casing\)

### Constantes

Uma constante é declarada quando precisamos lidar com dados que não devem ser alterados durante a execução do programa. Para isso,
utilizamos conjuntamente as palavra reservadas `final` e `static`.

_**Exemplo:**_

```java
public static final float PI = 3.14;
public static final String MEU_NOME = "Cassia";
```

* A palavra `final` indica que a variável não pode ter seu valor modificado.
* A palavra `static` indica que todos os objetos de uma classe compartilharão o mesmo valor.

**Nota:** Por convenção, usamos letras maiúsculas e underscores \(`_`\)para declarar constantes e assim distingui-las das variáveis.

### Enums

Em Java, uma enum é um tipo especial de classe no qual declaramos um conjunto de valores constantes pré-definidos. usamos a palavra chave
`enum` que antecede seu nome.

_**Exemplo:**_

```java
public enum Turno {
  MANHA, TARDE, NOITE;
}
```

Por serem os campos de uma enum constantes, seus nomes são escritos em letras maiúsculas.

Para atribuir um desses valores a uma variável podemos fazer como no código abaixo:

_**Exemplo:**_

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

Não temos como garantir a integridade dos valores que receberemos, ou seja, pode ser que as nossas usuárias escrevam `manha`, `manhã`,
`Manhã`, `De tardezinha` para representar o turno, o que causará comportamentos estranhos.

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

Agora, a `GestaoDeTurmas` pode ser um pouco mais precisa, utilizando somente os tipos que o programa aceita e informando o usuário caso a
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

### Os 4 pilares da Programação Orientada a Objetos

_**Abstração**_

É utilizada para a definição de entidades do mundo real. Sendo onde são criadas as classes. Essas entidades são consideradas tudo que é
real, tendo como consideração as suas características e ações.

![exemploImagem](https://lh5.googleusercontent.com/KsUZuY1T5eIEfjKn9Pdf5zzpTHsuCRF9V8Zd_E0Uf9tkKpiQVEJSsiD08OhRMvj6rIOUkH3_o7avmTJMXlqsVx6aPl_yorXLTnw4eeg0uB4DtY8zp__StPNB9qfeHC1FiU1YQlvd)

_**Encapsulamento**_

É a técnica utilizada para esconder uma ideia, ou seja, não expor detalhes internos para o usuário, tornando partes do sistema mais
independentes possível. Por exemplo, quando um controle remoto estraga apenas é trocado ou consertado o controle e não a televisão inteira.
Nesse exemplo do controle remoto, acontece a forma clássica de encapsulamento, pois quando o usuário muda de canal não se sabe que
programação acontece entre a televisão e o controle para efetuar tal ação.

![Explica&#xE7;&#xE3;o](https://lh6.googleusercontent.com/fe5tbRM9vzg0cpzT442alHz1anacJK4qLBOB1z4Gf-PxUCM9YXvL1PqNOR4nQYqGl3m8jeY1MIYWJmsMNgVYBD8ubJruT8sXIf7qVwc)

_**Herança**_

Na Programação Orientada a Objetos o significado de herança tem o mesmo significado para o mundo real. Assim como um filho pode herdar
alguma característica do pai, na Orientação a Objetos é permitido que uma classe possa herdar atributos e métodos da outra, tendo apenas uma
restrição para a herança. Os modificadores de acessos das classes, métodos e atributos só podem estar com visibilidade `public` e
`protected` para que sejam herdados.

![imagem](https://lh4.googleusercontent.com/R93m_BhnAlI0L8iQVV_A1wCd99BBrGGGrgaSdwZDF2MN_vKSHb0XPt6J2E4qs4DMUb5VhWxHHS1U2oLZ-jW5zbgnvlTfJ9JGtZj5OFsjyYp6Z43ZgbW6f7HtwXmPPOCL00zaj-fZ)

### Polimorfismo

O polimorfismo consiste na alteração do funcionamento interno de um método herdado de um objeto pai.

_**Exemplo:**_

![exemplo](https://lh3.googleusercontent.com/D4Ia9jLgKQ__CX7RtXIjPgS-Wgn0qO-fwV2F-vcuLcp6ckrArMioa6ZR4lyrsd9kWEawTEq_NRsx0JlMtf5urViGvmveo9bXQsqvYfBGMznKsyfGqTNORsbmABTNoccoat3qD77O)

## EXERCÍCIOS DE FIXAÇÃO

Clone o projeto do GitHub link:
[https://github.com/aceleradora-TW/laboratorio-oo-java](https://github.com/aceleradora-TW/laboratorio-oo-java)

Faça os exercícios e deixe os testes passar

**Divirta-se!**

