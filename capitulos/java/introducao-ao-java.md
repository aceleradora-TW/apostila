# Introdução ao Java

Neste capítulo, veremos alguns conceitos fundamentais do Java para que possamos começar a utilizar a linguagem.

## Olá, mundo

No Java o seu código sempre será escrito dentro de classes e métodos. O código de uma classe, por sua vez, deve ser escrito dentro de um
arquivo com extensão `.java` que tenha o mesmo nome da classe que estará contida nele. Ou seja, se quero escrever uma classe `Ola`, esta
deve ser escrita dentro do arquivo `Ola.java`:

<img :src="$withBase('/imagens/estrutura-de-classes-java.png')" alt="Estrutura de classes Java" style="width: 8cm; height: 7cm;" />

Uma classe é apenas um bloco de código que contém atributos (variáveis) e métodos (funções).

Os atributos irão guardar dados e os métodos irão executar lógica/comportamento. Para este capítulo, isto é tudo que precisamos saber sobre classes e métodos, veremos mais sobre eles no capítulo de orientação a objetos.

Sabendo disto, vejamos então como escrever um olá, mundo em Java:

```java
public class Ola {
  public static void main(String [] args) {
    System.out.println("Ola, mundo");
  }
}
```

No exemplo acima, criamos a classe `Ola`, que possui o método `main`, o qual irá escrever uma mensagem na tela utilizando o método `System.out.println` do Java.

> Existem algumas palavras chave neste exemplo que podem parecer bastante confusas (`public`, `static`, `void`, `String[]`). Por enquanto, não precisamos nos preocupar com elas, e iremos entender o que cada uma significa em outros capítulos.

---

### Comentários no código

Em alguns exemplos de código você verá o que se chamam comentários. Comentários são pedaços de texto no código que são ignorados pela linguagem de programação e suas ferramentas. Ou seja, podemos escrever qualquer coisa nestes comentários e o programa seguirá funcionando, pois eles não serão interpretados como um comando. Eles servem para documentar o código.

```java
/*
Sou um comentario de multiplas linhas.
Posso escrever varias coisas entre as barras e asteriscos.
Nao serei interpretado como codigo

*/
public void umMetodo() {

// Sou um comentario de uma linha, eu tambem nao serei interpretado como codigo

}

```

## Tipos de dados

A linguagem Java oferece diversos tipos de dados com os quais podemos trabalhar. Há basicamente duas categorias em que se encaixam estes tipos de dados: **tipos primitivos** e **tipos de referência**. Veremos primeiro os tipos primitivos e, depois, lá no final do capítulo, um pouco sobre os tipos de referência.

### Tipos primitivos

Os tipos primitivos correspondem a dados simples escalares (que possuem um tamanho fixo na memória). No java, existem oito tipos primitivos, mas nem todos são comumente utilizados. Os tipos que você utilizará com mais frequência serão:

  * **boolean:** Assume os valores booleanos `true` (verdadeiro) ou `false` (falso).
  * **int:** Armazena números inteiros entre $-2 ^ {31}$ e $2 ^ {31} - 1$
  * **double:** Armazena números decimais (quebrados, ou com vírgula).
  * **char:** O char é um tipo de variável que aceita a inserção de um caractere apenas.

```java
boolean verdade = true;
boolean mentira = false;

int numero = 5;
double numeroQuebrado = 5.00000001;

char umCaractere = 'a';
```

**Tipos primitivos menos comuns**

Além dos tipos mais comuns, ainda temos alguns outros tipos primitivos para guardar números:

* **float:** Armazena números decimais (quebrados, ou com vírgula) com uma precisão menor (menos números depois da vírgula) que o `double`.
* **short:** Armazena números inteiros entre `-32768` e `32767`
* **long:** Armazena números inteiros entre $-2 ^ {63}$ e $2 ^ {63} - 1$
* **byte:** Armazena números inteiros entre `-128` e `127`

> Estes tipos são muito similares aos tipos mais comuns. No entanto, eles existem para casos muito específicos, especialmente para quando precisamos economizar memória ou precisamos utilizar valores inteiros muito grandes (declarando-os como `long` em vez de `int`, por exemplo). Não estamos preocupados com estas situações neste momento.

**Links da documentação**

Alguns destes são tópicos bastante avançados, mas caso queira entender um pouco mais sobre alguns detalhes, aqui estão alguns links da documentação oficial do Java:

* [Sobre tipos primitivos](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)
* [Explicação sobre a precisão de números decimais](https://docs.oracle.com/javase/specs/jls/se7/html/jls-4.html#jls-4.2.3)
* [O padrão Unicode (utilizado pelo Java para representar variáveis do tipo char)](https://en.wikipedia.org/wiki/Unicode)

### Exercícios sobre tipos

__Exercício 1:__

Substitua as lacunas com os tipos que você achar mais adequados para guardar os valores das variáveis:

```java

// Veja este exemplo:

boolean v0 = false;

// Agora preencha as lacunas para as variaveis restantes:

_____ v1 = 1;

_____ v2 = 5000;

_____ v3 = 1.00;

_____ v4 = 42000;

_____ v5 = 'a';

_____ v6 = '5';

_____ v7 = 2147483648;

_____ v8 = true;
```


## Operadores

Como o próprio nome diz, os operadores permitem executar operações sobre um ou dois **valores primitivos**.

Alguns links da documentação oficial do Java:

* [Introdução a operadores Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html)
* [Resumo sobre operadores](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html)

### Operador de atribuição

Pode ser que isto passe despercebido, mas ao atribuir um valor à uma variável, estamos utilizando um operador, o operador de atribuição (`=`):

```java
int cinco = 5;
```

### Operadores de Igualdade

Os operadores de igualdade são utilizados para fazer a comparação de dois valores, ou seja, utilizamos estes operadores quando precisamos saber se um valor é `igual`, `diferente`, `maior` ou `menor` do que outro:

| Nome | Sintaxe | Exemplo | Significado |
| :--- | :--- | :--- | :--- |
| Igual | `==` | `x == y` | `x` é igual a `y` |
| Diferente | `!=` | `x != y` | `x` é diferente de `y` |
| Maior que | `>` | `x > y` | `x` é maior que `y` |
| Menor que | `<` | `x < y` | `x` é menor que `y` |
| Maior ou igual | `>=` | `x >= y` | `x` é maior ou igual a `y` |
| Menor ou igual | `<=` | `x <= y` | `x` é menor ou igual a `y` |

O uso de operadores de igualdade resulta em um valor booleano, o que permite utilizar estes operadores de diferentes maneiras:

Podemos utilizá-los diretamente dentro de estruturas condicionais:

```java
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

### Operadores Condicionais

Operadores condicionais são utilizados em valores booleanos. Eles são úteis quando precisamos verificar mais de uma condição ou precisamos inverter o valor de um booleano (trocar de `true` para `false` ou vice-versa):

#### E/And (&&)

Em inglês a palavra "and" é equivalente ao "e" do português (como na frase Maria `e` João), logo, este operador verifica duas condições e resulta em verdadeiro somente se as duas forem verdadeiras, caso contrário, resulta em falso:

```java
if (vaiChover == true && ehSexta == true) {
  System.out.println("Hoje irei embora mais cedo, pois eh sexta E esta chovendo.");
} else {
  System.out.println("Hoje ficarei até mais tarde.");
}
```

No código acima, a pessoa só iria para casa somente se fosse sexta e fosse chover.

#### Ou/Or (\|\|)

Em inglês a palavra "or" significa "ou", logo, este operador verifica duas condições e resulta em verdadeiro se pelo menos uma das duas for verdadeira, e, somente caso as duas sejam falsas, resulta em falso:

```java
if (vaiChover == true || ehSexta == true) {
  System.out.println("Hoje irei embora mais cedo, pois eh sexta ou esta chovendo.");
} else {
  System.out.println("Hoje ficarei até mais tarde.");
}
```

No código acima, a pessoa iria para casa se fosse chover, independentemente do dia da semana. Ou, caso fosse sexta mas não estivesse chovendo, ela também iria para casa.

#### Negação/Not (!)

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

**Exemplo de uso:**

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

### Operadores Numéricos

Os operadores numéricos servem para executar operações com números. Temos dois tipos de operadores numéricos:

**Binários**

São os operadores que executam operações entre **dois** números:

| Nome | Sintaxe | Exemplo | Resultado |
| :--- | :--- | :--- | :--- |
| Soma | `+` | `1 + 1` | `2` |
| Subtração | `-` | `2 - 2` | `0` |
| Multiplicação | `*` | `2 * 2` | `4` |
| Divisão | `/` | `4 / 2` | `2` |
| Módulo | `%` | `4 % 2` | `0` |

**Exemplos de uso**

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

**Unários**

São operadores que executam operações com apenas **um** número. Estes operadores não funcionam diretamente em números literais, apenas variáveis (veja os exemplos para entender isto melhor):

| Nome | Sintaxe |
| :--- | :--- |
| Incrementa | `++` |
| Decrementa | `--` |
| Acumula soma | `+=` |
| Acumula multiplicação | `*=` |
| Acumula subtração | `-=` |
| Acumula divisão | `/=` |

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

### Exercícios sobre Operadores

__Exercício 4:__

## Estruturas condicionais

As estruturas condicionais permitem com que tomemos decisões nos nossos programas. Como o próprio nome indica, elas nos permitem validar se alguma condição é verdadeira ou falsa e nos permitem decidir o que fazer em cada situação (o que fazer caso uma condição seja verdadeira e o que fazer caso uma situação seja falsa).

Estas estruturas foram criadas para imitar a maneira como o idioma inglês (ou português, neste caso) funciona. Ou seja, no nosso dia a dia, expressamos condições e decisões o tempo todo de maneira natural.

### Se (if) senão se (else if)  e senão (else)

Vejamos um exemplo de como expressamos condições e decisões usando o bom e charmoso português:

```
Se estiver chovendo, ficarei em casa.

Senão, irei até a lancheira do Zico comprar um dogão.
```

Na frase acima, expressamos uma condição:
  - `Se estiver chovendo`

E duas decisões:
  - `Ficarei em casa`
  - `irei até a lancheira do Zico comprar um dogão`

Vamos mudar um pouco a estrutura da frase acima para tentar deixar um pouco mais parecido com a maneira do Java expressar condições e
decisões:

```
se (estiver chovendo) {
  ficarei em casa
} senao {
  irei até a lancheira do Zico comprar um dogão
}
```

#### Exemplo de código

Pensando em código, vejamos como utilizaríamos as estruturas de `se` e `senão` (as quais se chamam `if` e `else` no Java):

```java
if (estaChovendo == true) {
  System.out.println("ficarei em casa");
} else {
  System.out.println("irei até a lancheira do Zico comprar um dogão")
}
```

#### O Senão se (else if)

O Java possui a estrutura `else if`, para quando precisamos encadear mais de uma verificação de condição:

```
Se for dia de pagamento, comprarei um dogão

Senão se for fim de semana, descansarei em casa

Senão, seguirei trabalhando para poder comprar um dogão
```

#### Exemplo de código

```java

if (ehDiaDePagamento == true) {
  System.out.println("Eh dia de dogao");
} else if (ehFimDeSemana == true) {
  System.out.println("Nao eh dia de dogao, eh dia de descanso");
} else {
  System.out.println("Nao eh dia de dogao, muito menos de descanso");
}
```

Caso a condição anterior seja falsa, a condição do else if será verificada e caso, seja verdadeira, será executado. Caso contrário, a ação contida no else será executada.

É possível encadear inúmeros `else ifs` em um bloco:

```java
if (condicao) {
  // Acao
} else if (condicao2) {
  // Outra Acao
} else if (condicao3) {
  // Mais Outra Acao
} else if (condicao4) {
  // Ainda Mais Outra Acao
} else {
  // Nada deu certo, outra acao
}
```

### Switch

O switch é muito útil para quando precisamos tomar muitas decisões com base em muitas condições. Se pode utilizar um monte de ifs encadeados para fazer a mesma coisa que o switch, mas ele é muito mais legível.

Vamos pensar em condições da vida cotidiana:

```
Caso seja Segunda, levarei o lixo para fora.

Caso seja Terça, lavarei a roupa.

Caso seja Quarta, passarei pano no chão.

Caso seja Quinta, dobrarei roupas.

Caso seja Sexta, farei comida.

Se não for nenhum dos dias anteriores, comerei um dogão, pois ninguém é de ferro.
```

Para expressar isto em forma de if encadeados, teríamos mais ou menos o seguinte:

```java
if (dia == SEGUNDA) {
  System.out.println("Levarei o lixo para fora");
} else if (dia == TERCA) {
  System.out.println("Lavarei a roupa");
} else if (dia == QUARTA) {
  System.out.println("Passarei pano no chao");
} else if (dia == QUINTA) {
  System.out.println("Dobrarei roupas");
} else if (dia == SEXTA) {
  System.out.println("Farei comida");
} else {
  System.out.println("Comerei um dogão");
}
```

O mesmo código, representado em um switch seria o seguinte:

```java
switch(dia) {
  case SEGUNDA:
    System.out.println("Levarei o lixo para fora");
    break;

  case TERCA:
    System.out.println("Lavarei a roupa");
    break;

  case QUARTA:
    System.out.println("Passarei pano no chao");
    break;

  case QUINTA:
    System.out.println("Dobrarei roupas");
    break;

  case SEXTA:
    System.out.println("Farei comida");
    break;

  default:
    System.out.println("Comerei um dogão");
    break;
}
```

## Estruturas de repetição

### Enquanto (while)

Assim como as estruturas de condição, o enquanto (ou `while`) também funciona verificando uma condição. A diferença é que o enquanto é uma estrutura de repetição, ou seja, ele repetirá o código enquanto aquela condição for verdadeira.

Vamos pensar em mais um exemplo da vida cotidiana:

```
Um dogão triplo custa 10 reais.

Eu tenho 0 reais na minha poupança.

Enquanto a quantia da poupança for menor que o preço do dogão, eu guardo um real

Depois de ter guardado dinheiro suficiente, eu comprarei o dogão

```

Vamos reformular para o exemplo acima do jeito Java:

``` java
int precoDoDogao = 10;

int valorNaPoupanca = 0;

while (valorNaPoupanca < precoDoDogao) {
  valorNaPoupanca++;
  System.out.println("Valor na poupanca: " + valorNaPoupanca);
}

System.out.println("Tenho dinheiro para um dogao triplo");
```

Ao executar este código, a saída é a seguinte:

```
Valor na poupanca: 1
Valor na poupanca: 2
Valor na poupanca: 3
Valor na poupanca: 4
Valor na poupanca: 5
Valor na poupanca: 6
Valor na poupanca: 7
Valor na poupanca: 8
Valor na poupanca: 9
Valor na poupanca: 10
Tenho dinheiro para um dogao triplo
```

Ou seja, o código dentro do `while` foi repetido até a condição (`valorNaPoupanca < precoDoDogao`) deixar de ser verdadeira.

Cada vez que o código se repetia, ele fazia duas coisas:

  - Incrementa `1` ao `valorNaPoupanca`
  - Imprime o valor atual de `valorNaPoupanca`

Após dez repetições (e consequentemente dez incrementos ao valor de `valorNaPoupanca`), o valor da variável `valorNaPoupanca` passou a ser `10`, que é igual ao valor de `precoDoDogao`. A partir deste momento, a condição `valorNaPoupanca < precoDoDogao` é falsa, pois os dois valores são iguais.

### Para (for)

A estrutura `for` é similar ao `while`, mas se organiza de uma maneira um pouco diferente.

Embora possa funcionar de outras maneiras (que não nos interessam agora), o loop `for` foi pensado para funcionar junto com um
`incrementador`:

> uma variável inteira, que geralmente começa com valor 0 e tem seu valor aumentado (geralmente de 1 em 1, mas pode ser de outras formas).

Um laço for convencional é construído à partir de três coisas:

  - Declaração do incrementador
  - Condição de execução
  - Incremento

__Declaração do incrementador__

É quando declaramos a variável que servirá de incrementadora. Nada mais do que isso.

__Condição de execução__

Definimos uma condição que será verficada pela estrutura a cada repetição (ou iteração). Assim como no loop `while`, enquanto esta condição for verdadeira, a repetição seguirá acontecendo, quando ela tornar-se falsa, a repetição para de acontecer.

__Incremento__

Defnimos como a variável incrementadora terá seu valor aumentado após cada repetição. Podemos dizer, por exemplo,  que o valor aumentará de 1 em 1 (`incrementadora++`) ou de 2 em 2 (`incrementadora += 2`). Este incremento acontece sempre ao final de cada repetição.

#### Sintaxe do for

```java
for (incrementador; condicao; incremento) {
  // Codigo a ser repetido
}
```

#### Exemplos de código

Vejamos como calcular a tabuada do 5 usando o for:

```java
System.out.println("Tabuada do 5:");

for (int i = 0; i <= 10; i++) {
  System.out.println(5 * i);
}
```

Saída:

```
Tabuada do 5:
0
5
10
15
20
25
30
35
40
45
50
```

#### O dogão

Podemos resolver o problema que resolvemos com o `while` (de guardar a grana do dogão) também com o `for`:

```java
int valorDoDogao = 10;

for (int poupanca = 0; poupanca < valorDoDogao; poupanca++) {
  System.out.println("Valor na poupanca: " + valorNaPoupanca);
}

System.out.println("Tenho dinheiro para um dogao triplo");
```

#### Meio confuso?

O `for` pode parecer meio confuso agora, mas ele será extremamente útil para resolver vários problemas, especialmente quando começarmos a lidar com vetores e listas (situações para as quais o `for` foi especialmente desenhado). Não se preocupe, tudo ficará mais concreto nos próximos capítulos.

## Tipos de referência

Lá no começo do capítulo havíamos comentado sobre tipos de variáveis: `primitivas` e `por referência`. Deixamos as de referência por último pois era importante visitar alguns conceitos antes. Vamos tentar entender um pouco mais sobre as variáveis de referência.

Os tipos de referência armazenam objetos. Neste momento, não faz sentido tentarmos entender a fundo o que isto significa. Sugerimos que depois de você dar uma lida no capítulo de orientação a objetos, revisite esta parte da apostila para entender um pouco melhor.

Nas primeiras interações com a linguagem, você irá utilizar quase que constantemente dois tipos de referências:

* Arrays (vetores)
* Strings

Portanto, neste momento, vamos nos concentrar em entender estes tipos primeiro.

## Arrays (vetores)

Arrays (ou vetores) são uma estrutura utilizada para quando necessitamos armazenar um conjunto de valores em uma variável, como uma lista.

**Por que utilizamos vetores?**

Pensemos em um caso de uso. Estamos escrevendo um programa que armazena 10 valores aleatórios inteiros na memória, multiplica cada um por 2 e exibe os resultados na tela. Podemos resolver isto de duas maneiras:

### Criando 10 variáveis

```java
int valor0 = 5;
int valor1 = 11;
int valor2 = 8;
int valor3 = 13;
int valor4 = 18;
int valor5 = 20;
int valor6 = 30;
int valor7 = 35;
int valor8 = 2;
int valor9 = 4;

System.out.println(valor0 * 2);
System.out.println(valor1 * 2);
System.out.println(valor2 * 2);
System.out.println(valor3 * 2);
System.out.println(valor4 * 2);
System.out.println(valor5 * 2);
System.out.println(valor6 * 2);
System.out.println(valor7 * 2);
System.out.println(valor8 * 2);
System.out.println(valor9 * 2);
```

---

Esta alternativa não é um bom caminho, pois nosso código ficaria imenso e confuso. Imagine ter que fazer isto com 100 variáveis?

Vejamos a outra alternativa:

### Criando um vetor de 10 posições

Antes de mais nada, para criar um vetor de valores inteiros, fazemos o seguinte:

```java
int[] valores = new int[10];
```

Utilizamos os colchetes `[]` para indicar que a variável será um array de inteiros. Para criar um array, precisamos dizer qual será seu tamanho, ou em outras palavras, quantos elementos ele poderá guardar. Neste caso, estamos dizendo que o array poderá guardar `10` elementos.

**Precisamos falar sobre índices**

Como mencionando anteriormente, arrays são uma lista de valores e, para guardar ou acessar elementos desta lista, utilizamos um índice, que indica em qual posição da lista está o elemento que queremos acessar.

Ao criar um array de inteiros de tamanho 10, inicialmente, todas as suas 10 posições conterão o valor `0`:

```java
{ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
```

Vamos adicionar o valor `15` à segunda posição do array. Os índices começam em `0`, portanto, para acessar a segunda posição, utilizamos o índice `1`:

```java
valores[1] = 15;
```

Ao executar o código acima, o valor do nosso array agora será:

```java
{ 0, 15, 0, 0, 0, 0, 0, 0, 0, 0 }
```

**De volta ao problema**

Para resolver o nosso problema utilizando arrays, basta adicionar os números em cada posição do array:

```java
valores[0] = 5;
valores[1] = 11;
valores[2] = 8;
valores[3] = 13;
valores[4] = 18;
valores[5] = 20;
valores[6] = 30;
valores[7] = 35;
valores[8] = 2;
valores[9] = 4;
```

**Segura o cavaco!**

Parando para pensar, até agora não ganhamos muita coisa ao utilizar um array em vez de 10 variáveis, nosso código está ficando muito parecido e até um pouco mais complexo que a primeira alternativa (de criarmos dez variáveis).

_**Qual é a moral de usar esse negócio então?**_

Uma das maiores vantagem de utilizar um array em vez de várias variáveis é que eles nos permitem utilizar **estruturas de repetição!**

Vamos resolver nosso problema utilizando um loop `for`:

```java
valores[0] = 5;
valores[1] = 11;
valores[2] = 8;
valores[3] = 13;
valores[4] = 18;
valores[5] = 20;
valores[6] = 30;
valores[7] = 35;
valores[8] = 2;
valores[9] = 4;

for (int i = 0; i < valores.length; i++) {
  System.out.println(valores[i] * 2);
}
```

> _**"Arrays existem por bons motivos, fique de olho em onde você poderá utilizá-los."**_
>
>  _Regina Casé_

**Bônus: Definindo valores direto na declaração**

No caso do nosso problema, os arrays nos dão uma outra vantagem bacana. Podemos criar o array já preenchido com os valores que precisamos, o que simplifica bastante nosso código:

```java
int [] valores = { 5, 11, 8, 13, 18, 20, 30, 35, 2, 4 };

for (int i = 0; i < valores.length; i++) {
  System.out.println(valores[i] * 2);
}
```

### Exercícios sobre vetores

__Exercício 2__

Complete o código abaixo para criar um novo vetor vazio de numeros inteiros e tamanho 10:

```java
int [] vetor = _____;
```

Complete o código abaixo criando um vetor de inteiros com os valores pre-determinados `1, 3, 5 e 7`:

```java
int [] vetor = _____;
```

No código abaixo:

```java
int [] vetor = {2, 4, 6, 8};

int a = vetor[1];
```

Qual será o valor da variável `a `?

## Strings

String é uma das classes mais importantes do Java, sendo vastamente utilizada. Strings servem para representar e manipular texto.

Para declarar uma String, basta fazer o seguinte:

```java
String dia = "Sexta";
```

Ao começar no Java, muitas pessoas pensam que String é um tipo primitivo, o que não é verdade, pois ela é uma classe e valores String armazenados em variáveis são do tipo referência. Esta confusão geralmente acontece pois ela é a única classe na linguagem que possui uma **representação literal**, ou seja, é possível criar novas Strings utilizando aspas duplas.

### Manipulando Strings

Strings são úteis para resolver incontáveis tipos de problemas, por isso, é interessante revisar como manipulamos valores String utilizando seus métodos. Vejamos alguns métodos úteis:

### Saber o tamanho de uma String

Usa-se o método **length**. Nome em português:

> length: tamanho

Retorna o tamanho da String. O tamanho é a quantidade de caracteres que a String possui:

```java
String texto = "Oi";

int tamanho = texto.length(); // tamanho sera 2;
```

### Comparar duas Strings

Usa-se o método **equals**. Nome em português:

> equals: igual ou é igual a

Compara duas strings e retorna verdadeiro (`true`) caso elas sejam iguais:

```java
String texto = "Oi";
String outroTexto = "Oi";

boolean saoIguais = texto.equals(outroTexto); //saoIguais sera true
```

ou falso (`false`) caso elas sejam diferentes:

```java
String texto = "Oi";
String outroTexto = "Opa";

boolean saoIguais = texto.equals(outroTexto); //saoIguais sera false
```

### Substituir parte do conteúdo de uma String

Usa-se o método **replace**. Nome em português:

> replace: substituir

Este método recebe dois argumentos:

* `conteudoAntigo`
* `conteudoNovo`

Ele retorna uma nova String substituindo todas as ocorrências do valor `conteudoAntigo` encontradas na String por `conteudoNovo`:

```java
String bomDia = "Bom Dia!";

String boaNoite = bomDia.replace("Dia", "Noite"); // boaNoite sera "Boa Noite!"
```

### Obter um pedaço da string

Usa-se o método **substring**.

Este método recebe dois argumentos:

* indiceInicial
* indiceFinal

Retorna uma nova String contendo a porção que está entre as posições `indiceInicial` e `indiceFinal`:

```java
String texto = "Aceleradora";

String pedaco = texto.substring(0, 3); // pedaco sera "Ace"
```

### Separar uma String em vários pedaços

Usa-se o método **split**. Nome em português:

> split: separar

Este método recebe um argumento:

* token

Retorna um array de Strings, formado pela divisão da String original. Este método irá dividir a String cada vez que encontrar o `token` no conteúdo da String:

```java
String texto = "A,B,C";

String[] pedacos = texto.split(","); // pedacos sera um array contendo {"A", "B", "C"}
```

Dica, caso queira transformar uma String em um array de Strings, utilize este método passando uma String vazia:

```java
String texto = "dica";

String[] pedacos = texto.split(""); //pedacos sera um array contendo {"d", "i", "c", "a"}
```

### Verificar se a String contém um conteúdo específico

Usa-se o método **contains**. Nome em português:

> contains: contém

Este método recebe um argumento:

* busca

Retorna verdadeiro caso a String contenha o valor especificado na `busca` ou falso caso contrário.

```java
String texto = "Aceleradora";

texto.contains("A"); // sera verdadero
texto.contains("B"); // sera falso
texto.contains("Ace"); // sera verdadeiro
texto.contains("radora"); // sera verdadeiro
```

### Converter tudo para minúsculas

Usa-se o método **toLowerCase**. Nome em português:

> toLowerCase: para minusculas

Retorna uma nova String com todas as letras maiúsculas trocadas por minúsculas:

```java
String texto = "BOM DIA! 123";

String textoMinusculo = texto.toLowerCase(); // textoMinusculo sera "bom dia! 123"


String outroTexto = "Bom Dia";

String outroTextoMinusculo = texto.toLowerCase(); // outroTextoMinusculo sera "bom dia! 123"
```

### Converter tudo para maiúsculas

Usa-se o método **toUpperCase**. Nome em português:

> toUpperCase: para maiusculas

Retorna uma nova String com todas as letras minúsculas trocadas por maiúsculas:

```java
String texto = "bom dia";

String textoMaiusculo = texto.toUpperCase(); // textoMaiusculo sera "BOM DIA"


String outroTexto = "Bom Dia";

String outroTextoMaiusculo = texto.toUpperCase(); // outroTextoMaiusculo sera "BOM DIA"
```

Documentação Java:

* [Lista completa dos métodos da classe string](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html)

## Fim do capítulo

E isso é quase tudo que você deve saber para começar a se aventurar no Java! Este capítulo serve como um pontapé inicial, mas ainda temos muita coisa para ver! Caso você tenha interesse, dê uma lida nos apêndice, mais abaixo, que tentam explicar um pouco mais sobre algumas coisas que foram comentadas neste capítulo, mas que podem ser meio confusas neste momento.

Recomendamos revisitar o apêndice depois da leitura do capítulo de orientação a objetos e da realização de alguns exercícios.

## Exercícios de fixação

Olhando para o código abaixo, preencha os comentários indicando o que está acontecendo em cada uma das linhas. Logo abaixo você encontrará o gabarito, recomendamos tentar resolver o exercício antes de olhar para o gabarito:

---

```java

//
public class IntrducaoJava {

  //
  String umAtributo;

  //
  public void executar() {

    //
    int valor = 10;

    //
    Cachorro cachorro = new Cachorro();

    //
    cachorro.brincar();

    //
    int i = 1;

    //
    while (i < valor) {
      //
      System.out.println("Iteracao: " + i);

      //
      if (i % 2 == 0) {
        //
        System.out.println("Iteracao par")
      }

     //
     i++;
    }
  }
}
```

---


## Exercícios práticos

No repositório da trilha de exercícios, você encontrará alguns desafios de lógica de programação que lhe ajudarão a fixar os conceitos apresentados nesta introdução.

Acesse o repositório aqui: [https://github.com/aceleradora-TW/trilha-de-exercicios](https://github.com/aceleradora-TW/trilha-de-exercicios)

## Gabaritos dos exercícios

__Exercício 1:__

```java

// Veja este exemplo:

boolean v0 = false;

// Agora preencha as lacunas para as variaveis restantes:

byte v1 = 1; // int, short ou long tambem sao respostas corretas. Se utiliza byte neste caso, por conta do tamanho pequeno do numero.

short v2 = 5000; // int ou long tambem seriam corretoa. Short nao poderia ser utilizado aqui, pois o numero eh muito grande.

double v3 = 1.00; // float tambem seria correto.

int v4 = 42000; // long tambem serviria.

char v5 = 'a'; // caraceteres sao representados utilizando aspas simples (')

char v6 = '5'; // apesar de cinco ser um numero, aqui ele esta representado como um caracetere, pois esta envolto de aspas simples

long v7 = 2147483648; // Este numero nao cabe no tipo int. O compilador geraria um erro com a mensagem "integer number too large" se usassemos int (ou um tipo ainda menor, como short) aqui

boolean v8 = true; // O tipo booleano representa apenas os valores logicos true (verdadeiro) e false (falso).
```

__Exercício 2__

Complete o código abaixo para criar um novo vetor vazio de numeros inteiros e tamanho 10:

```java
int [] vetor = new int [10];
```

Complete o código abaixo criando um vetor de inteiros com os valores pre-determinados `1, 3, 5 e 7`:

```java
int [] vetor = {1, 3, 5, 7};
```

Outra forma de resolver esta questão, seria:

```java
int [] vetor = new int[4];
vetor[0] = 1;
vetor[1] = 3;
vetor[2] = 5;
vetor[3] = 7;
```

No código abaixo:

```java
int [] vetor = {2, 4, 6, 8};

int a = vetor[1];
```

Qual será o valor da variável `a `? __4__


```java

// Declara a classe IntroducaoJava
public class IntrducaoJava {

  // declara um atributo chamado "umAtributo" do tipo String
  String umAtributo;

  // declara um metodo chamado executar que nao retorna nenhum valor (tipo de retorno void)
  public void executar() {

    // declara uma variavel inteira "valor" com valor 10
    int valor = 10;

    // Declara a variavel cachorro do tipo Cachorro e atribui a ela numa nova instância de objeto da classe cachorro
    Cachorro cachorro = new Cachorro();

    // Chama o metodo brincar do objeto cachorro
    cachorro.brincar();

    // declara uma variavel i do tipo int com valor 1
    int i = 1;

    // repete enquanto i for menor que valor
    while (i < valor) {
      // imprime o valor de i na tela
      System.out.println("Iteracao: " + i);

      // Verifica se i é par
      if (i % 2 == 0) {
        // Se i for par, imprime mensagem na tela
        System.out.println("Iteracao par")
      }

     // Soma 1 ao valor de i (o que se chama de incrementar)
     i++;
    }
  }
}
```

## Apêndice

### Strings

#### Representação literal

Quando falamos _representação literal_, estamos nos referindo às _aspas duplas_. No Java, quando queremos criar um objeto de alguma classe, sempre temos que utilizar a palavra `new`. Vamos supor que nosso programa tem as classes `Carro` e `Papagaio`. Para criar objetos destas classes e guardá-los em variáveis, teríamos que utilizar o new:

```java
Carro carro = new Carro();
Papagaio passaro = new Papagaio();
```

Seguindo esta lógica, teríamos que fazer o mesmo com a String, certo? Afinal, ela é uma classe! Teríamos que fazer algo como:

```java
String dia = new String();
```

Ainda que isto seja possível, não é necessário, pois String é uma classe tão comumente utilizada, que o Java nos dá a facilidade de utilizar as aspas duplas em vez de new:

```java
String dia = "Sexta";
```

#### Imutabilidade

Quando dizemos que as Strings são imutáveis, basicamente significa que o valor de uma variável String não pode ser alterado em algumas situações.

Isto gera bastante confusão, mas vejamos o que isto significa na prática.

Quando o código a seguir é executado:

```java
String saudacao = "Bom dia";

saudacao.substring(0, 3);
```

Qual será o valor da variável saudação? Continuará sendo `Bom dia`, pois os métodos da String retornam novas Strings e mantém os valores originais inalterados, basicamente isto é que significa imutabilidade das Strings. Se quiséssemos utilizar o valores resultante de `substring`, deveríamos guardá-lo em uma outra variável:

```java
String saudacao = "Bom dia";

String bom = saudacao.substring(0, 3); // tera o valor "Bom"
```

### Qual a diferença entre tipos primitivos e tipos de referência?

Existem grandes diferenças entre estes tipos, no entanto, para nós esta diferença ainda não é clara, pois não exploramos os conceitos de orientação a objetos. Basicamente, tipos primitivos guardam valores, enquanto tipos de referência guardam a referência para um objeto na memória. Esta ideia pode soar bastante estranha por enquanto, pois ainda não sabemos o que é um objeto.

Para saber quando uma variável é primitiva e quando ela é referência, podemos observar o uso da palavra chave `new` (exceto com as Strings). Esta palavra é responsável por criar uma instância de objeto. Em outras palavras, ela colocará os dados do objeto em memória e adicionará na variável uma referência para a posição de memória onde estão estes dados para que possamos manipulá-los (daí o nome tipo de referência).

Não se preocupe se nada disto fizer sentido agora, recapitularemos estas ideias posteriormente com mais detalhes.

Com tudo isto em mente, vejamos uns exemplos:

```java
// Um tipo primitivo:
int numero = 5;

// Um tipo de referencia
Carro carro = new Carro();

/*
Strings sao a unica excessao a regra da palavra new.

Elas tambem sao um tipo por referencia, mas nao precisamos da palavra new, em vez disto,
podemos utilizar as aspas duplas para declarar uma nova String e o Java vai entender numa boa:
*/
String dia = "Sexta";
```

Uma diferença muito importante entre tipos primitivos e tipos de referência é que tipos de referência, por serem objetos, possuem atributos e métodos. Ou seja, em um tipo por referência, eu posso fazer o seguinte:

```java
String dia = "SEXTA";

// Chamar um metodo da String
String diaMinusculo = dia.toLowerCase();

int [] vetor = new int [5];

// Acessar um atributo do vetor
int tamanhoVetor = vetor.length;
```

Já nos tipos, primitivos, nada disto é possível, pois eles não possuem atributos nem métodos, pois variáveis primitivas apenas guardam um valor bruto.

Depois de ler o capítulo de orientação a objetos, recomendamos que vocês revisite esta parte, prometemos que tudo fará um pouco mais de sentido.

