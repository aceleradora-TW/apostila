# JavaScript

Além deste capítulo, você também pode visitar o tutorial em português da MDN sobre JavaScript:
[https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)

O JavaScript (JS) é uma linguagem de programação utilizada principalmente em páginas web. Com o JS, você pode mostrar mensagens e outras
informações interessantes, fazer verificações ou mudar dinamicamente a apresentação visual das páginas, conforme o comportamento que você
deseja que sua página (ou aplicação) possua.

Apesar de o JavaScript ter nascido para ser utilizada nos browsers, ela mudou muito nos últimos anos, tornando-se uma linguagem muito
versátil. Esta mudança se deve majoritariamente ao surgimento do Node.js, que é uma ferramenta que permite que o JavaScript seja executado
fora dos browsers, da mesma maneira que outras linguagens interpretadas, como Python ou Ruby. Por conta desta versatilidade, ela pode hoje
ser aplicada nos mais diversos contextos, desde a criação de front-ends modernos baseados em componentes e estados reativos, passando por
aplicações desktop e IoT, até sistemas web altamente complexos que demandam diferentes níveis de disponibilidade e escalabilidade.

A sintaxe simplificada, tipagem flexível e a possibilidade de adotar conceitos de diversos paradigmas ao mesmo tempo são o que tornam
JavaScript uma linguagem tão divertida e peculiar. Entretanto, sua peculiaridade abre margem para uma grande barreira de adoção,
especialmente para aquelas pessoas que estão dando seus primeiros passos, seja somente em JS ou na programação como um todo. Assim como pode
ser muito divertido programar usando JS e bolar soluções eficientes e com design incrível, também é muito fácil cair num temporal de
confusão e código difícil de manter e entender.

### Exemplos de aplicação de JavaScript pós node

Citando apenas algumas ferramentas, se pode entender melhor como JavaScript tornou-se poderoso após o node:

#### Programação em browsers

Ainda hoje se pode utilizar JavaScript da maneira como ele nasceu para ser utilizado: dentro de páginas web. Iremos focar nesta forma de uso
nesta apostila, pois será a mais útil ao longo da Aceleradora. Veremos como integrar scripts com páginas HTML e algumas bibliotecas que
ajudam a construir aplicações mais interativas.

#### Transpiladores, bundles e bibliotecas de componentes

O código criado para ser usado em browsers não é mais o mesmo que o de cinco ou dez anos atrás. Muitas ferramentas surgiram em volta do
JavaScript, dando-lhe muitos super poderes que permitem as mais diversas formas de uso. Hoje em dia podemos utilizar bibliotecas como React,
por exemplo, que nos permite criar componentes de maneira mais eficiente. Podemos utilizar ferramentas de transpilação, que convertem um
código com sintaxe avançada (que não é amplamente suportada pelos browsers) em um código compatível com browsers. Veja o apêndice deste
capítulo para mais detalhes.

#### Ionic e React Native

Dentre muitos outros, Ionic e React Native são ferramentas que possibilitam a criação de aplicações móveis para múltiplos sistemas
operacionais (como Android e iOS, por exemplo) baseadas quase totalmente em código JavaScript.

#### Electron

Electron possibilita a criação de aplicações Desktop baseadas em tecnologias web, tais como HTML, CSS e JavaScript. Algumas das aplicações
que o utilizam são, por exemplo: Atom e Slack.

#### JhonnyFive e BENJA

A biblioteca Jhonny Five permite o uso de JavaScript para programação de dispositivos IoT, como o Arduino. BENJA é uma distribuição Linux
para nano computadores (como Raspberry Pi e Beagle Bone) com foco em aplicações do tipo Kiosk.

#### Express

Express é a biblioteca mais popular para desenvolvimento de aplicações web com node.js. Com um design extremamente versátil e inteligente,
Express permite o uso de diversos módulos para as mais diferentes necessidades de uma aplicação web, o que permite o desenvolvimento de
aplicações web completas.

#### MongoDB

MongoDB é um dos mais populares bancos de dados não relacionais e, embora não seja feito em JavaScript, ele ainda assim se baseia em vários
conceitos da linguagem para estruturar informações e fornecer mecanismos de pesquisa.

## A ECMAScript

O ECMAScript é a especificação do JavaScript. Isso é dizer que ECMAScript é uma espécie de documentação onde estão as definições de o que é
JavaScript e como cada browser ou plataforma devem implementar seus motores de interpretação JavaScript para que estes interpretem, bem,
JavaScript, ou seja, que entenda JavaScript como a mesma coisa que todos os outros browsers entendem. O ECMAScript é, portanto, o guia
oficial seguido por cada empresa/equipe/pessoa que desenvolve um software que interprete JavaScript.

É dessa forma que os browsers possuem interpretadores de JavaScript que entendem JavaScript como sendo a mesma coisa. Na verdade, é quase
isso. Alguns browsers implementam funcionalidades do JavaScript que ainda não foram implementadas em outros browsers (ou nem estão na
especificação ECMAScript).

### Porque estamos falando de ECMAScript?

O ECMAScript define como o JavaScript será implementado, o que dita quais recursos as pessoas que programam em JavaScript terão de acordo
com cada versão da linguagem. É importante saber que isto existe, pois boa parte do conteúdo na internet se refere a versões do ECMAScript
para explicar funcionalidades do JavaScript. Por exemplo, é importante saber da existência do ECMAScript 2015 (também conhecido como ES6),
que trouxe mudanças positivas drásticas à linguagem. As mudanças trazidas pelo ES6/2015 podem ser vistas aqui:
[http://es6-features.org/](http://es6-features.org/)

Também é importante saber sobre isso para que se possa entender como escrever um código que seja compatível com os browsers disponíveis no
mercado. Muitas vezes alguns browsers não entenderão a sintaxe do código JavaScript que escrevemos (pois eles podem ser muito antigos e
podem não entender novos recursos da linguagem, por exemplo).

### Como eu sei o que posso ou não usar?

É preciso ler a documentação dos browsers. Uma das melhores fontes de informação à respeito dos padrões da Web é o
[MDN](https://developer.mozilla.org/en-US/), um portal criado pela Mozilla (empresa que desenvolve o navegador Firefox).

Outra ferramenta bastante útil é o Can I Use?, disponível aqui: [https://caniuse.com/](https://caniuse.com/)

## Como começar a usar JavaScript

Existem inúmeras maneiras de começar a usar o JavaScript. Vejamos como começar a usá-lo da maneira clássica, integrando-o com nossas páginas
HTML diretamente.

### Inserindo o código JavaScript na página HTML

Podemos escrever código JavaScript dentro do HTML. Para isto, utilizamos a tag `script`:

Exemplo:

```html
<script type="text/javascript">
    //código JavaScript
</script>
```

### Inserindo código JavaScript externo no HTML

A maneira anterior não é recomendada, pois os arquivos podem ficar muito extensos e difíceis de ler e manter. Sugere-se separar o código
JavaScript em arquivos dependentes e linkar estes arquivos ao HTML. Exemplo:

Criamos o arquivo `meuArquivo.js`:

```javascript
alert('Buenas');
```

E o linkamos ao nosso HTML:

```html
 <!DOCTYPE html>
 <html>
   <head>
     <script type="text/javascript" src="meuArquivo.js"></script>
   </head>
   <body>
   </body>
 </html>
```

## Variáveis

Em contraste ao Java, JavaScript possui tipagem dinâmica, ou seja, não é necessário definir o tipo das variáveis ao declará-las. Isto não
significa que não existem tipos de dados no JavaScript, a diferença é que o JavaScript sempre tentará adivinhar os tipos de dados que
estamos tentando utilizar (o que pode ser bom e ruim ao mesmo tempo).

## Tipos de dados

O JavaScript possui os seguintes tipos de dados:

### Booleano

Representam `true` (verdadeiro) ou `false` (falso).

### null

Representa a ausência de valor. É quando a variável está vazia.

### undefined

Representa a inexistência da variável. Diferentemente do `null`, undefined não significa que a variável está vazia, significa que ela nem
sequer existe.

### Number

Representa números de qualquer espécie, sendo estes inteiros ou decimais (números quebrados).

### String

Representa texto.

### Objetos

Representa entidades mais complexas, como `Arrays`, `Expressões Regulares` ou `Objetos` propriamente ditos. Veremos um pouco mais sobre
alguns destes tipos complexos mais adiante.

## Declarando variáveis

Como o JavaScript não possui tipos, basta declararmos nossas variáveis utilizando uma das palavras reservadas `var`, `let` ou `const`.

### var

O `var` é o jeito clássico de declarar variáveis. Esta palavra reservada existe desde as primeiras versões da linguagem:

```javascript
var nome = 'Silvia';
var outroNome = 'Outra Silvia';
var numero = 5;
var lista = [];
var objeto = {};

function umaFuncao() {
  var x = 1;
}
```

### let

O `let` surgiu à partir do ES6 e foi criado para corrigir alguns problemas causados pelo `var`. Se utiliza da mesma forma:

```javascript
let nome = 'Silvia'
let outroNome = 'Outra Silvia'
let numero = 5
let lista = []
let objeto = {}

function umaFuncao() {
  let x = 1;
}
```

### Diferenças importantes em relação ao `var`

#### Variáveis não podem ser redeclaradas

Ao utilizar `var`, podemos redeclarar variáveis com mesmo nome:

```javascript
var x = 1;
var x = 2;
```

Isto é ruim pois é confuso. Ou seja, pode ser que tenhamos nos esquecido da existência da variável `x` e queiramos declarar uma variável com
este nome em outro ponto do código. Com `var`, isto será permitido e o valor da variável original será sobrescrito, causando possíveis
comportamentos inesperados. O ideal nesta situação, é que o JavaScript impeça que outra variável seja declarada com o mesmo nome. Para isto,
devemos utilizar `let`.

O código abaixo:

```javascript
let x = 1;
let x = 2;
```

Irá gerar o seguinte erro:

```
SyntaxError: Identifier 'x' has already been declared
```

Isto não significa que o valor de uma variável já declarada não possa ser alterado:

```
let x = 1;
x = 2;
```

O código acima funcionará sem problemas.

#### Controle de escopo mais eficiente

Qual será a saída do código abaixo?

```javascript
function umaFuncao() {

  if (true) {
    var x = 1;
    let y = 2;
  }

  console.log(x)
  console.log(y)
}

umaFuncao()
```

A saída será um erro:

```
1
console.log(y)
            ^
ReferenceError: y is not defined
```

As variáveis foram declarados dentro do bloco `if`. Com `var`, não existe um controle muito rígido de escopos, e as variáveis podem ser usadas
foram do bloco em que foram declaradas (veja que o valor `1` foi escrito na saída do programa). O mesmo não acontece com o `let`, que
controla os escopos das variáveis de maneira mais rígida. Este controle mais rígido é algo positivo, pois ajuda a prevenir comportamentos
inesperados.

### const

O `const` serve para declarar constantes, variáveis cujos valores não devem ser modificados depois de atribuídos:

```javascript
const nome = 'Silvia'
const outroNome = 'Outra Silvia'
const numero = 5
const lista = []
const objeto = {}

function umaFuncao() {
  const x = 1;
}
```

### Diferenças importantes em relação e ao `var` e ao `let`

#### consts são constantes

Como mencionado anteriormente, os valores de uma variável `const` não podem ser modificados. O código a seguir:

```javascript
const x = 1;
x = 2;
```

Irá causar o seguinte erro:

```
TypeError: Assignment to constant variable.
```

Ainda que seja contraditório, constantes não são totalmente constantes. Quando declaramos uma constante que guarda um objeto, por exemplo:

```javascript
const pessoa = {
  nome: 'Silvia',
  idade: 30
}
```

Podemos modificar o conteúdo do objeto sem problemas:

```javascript
pessoa.nome = 'Lima'

console.log(pessoa.nome) // Lima
```

Isto acontece porque não estamos modificando o valor da variável, mas sim do atributo do objeto atrelado à ela.

## Arrays (listas)

Os arrays do JavaScript se parecem mais com listas do que vetores, pois podem para armazenar múltiplos elementos e se expandem de forma
dinâmica.

Arrays são representados por um par de colchetes (`[]`).

__Exemplos:__

Podemos ter um array vazio:

``` javascript
const umArrayVazio = []
```

Um array com dados:

```javascript
const umArrayComNumeros = [1, 2, 3, 4, 5]
```

Um array com arrays:

```javascript
const umArrayDeArrays = [[1], [], [3], []]
```

Em Javascript, não é necessário que todos os elementos de um array sejam do mesmo tipo, o que nos permite fazer coisas como:

``` javascript
const saladaDeFrutas = [
  1,
  '2',
  'tres',
  false,
  undefined,
  null,
  /expressao_regular/,
  {}
]
```

Os arrays em Javascript são objetos, o que significa que eles possuem atributos e "métodos". Ou seja, podemos fazer coisas como:

### Saber o tamanho de um array

```javascript
const arraySimples = [1, 2, 4]
console.log(arraySimples.length) // 3
```

### Adicionar novos elementos no final

```javascript
const arraySimples = [1, 2, 4]
arraySimples.push(5)
console.log(arraySimples) // [1, 2, 4, 5]
```

### Percorrer os elementos

Podemos utilizar a função `forEach`:

```javascript
const arraySimples = [1, 2, 4]

arraySimples.forEach(function(elemento) {
  console.log(elemento)
})
```

Mas também podemos usar loops `for`:

__For clássico__

```javascript
const arraySimples = [1, 2, 4]

for (let i = 0; i < arraySimples.length; i++) {
  console.log(arraySimples[i]);
}
```

__For of (conhecido como `for each` em outras linguagens)__

```javascript
const arraySimples = [1, 2, 4]

for (let numero of arraySimples) {
  console.log(numero);
}
```

### Acessando elementos de um array

Para acessar elementos de um array, utilizamos a lógica de índices:

```javascript
const arraySimples = [1, 2, 4]
const primeiroElemento = arraySimples[0]
console.log(primeiroElemento) // 1
```

Quando tentamos acessar um elemento que não existe, recebemos `undefined`:

```javascript
const arraySimples = [1, 2, 4]
const vigesimoElemento = arraySimples[20]
console.log(vigesimoElemento) // undefined
```

[Mais informações sobre arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Funções

Para criar funções, utilizamos a palavra reservada function.

exemplo:

```javascript
 function minhaFuncao(p1, p2) {
   return p1 + p2;
   //a função retorna o produto p1 e p2
 }
```

## Objetos

Objetos são estruturas mais complexas que servem para organizar dados. Eles são estruturas associativas, onde podemos associar um valor à um
nome.

### Declarando objetos

Para declarar objetos, usamos as chaves (`{}`):

```javascript
let umObjeto = {};
```

### Para que e como usar objetos?

Objetos são extremamente úteis para modelar dados, especialmente quando precisamos manipular estruturas de dados complexas, que possuem
muitas variáveis e relações. Vejamos como representar dados de uma pessoa em JavaScript:

Podemos criar variáveis separadas:

```javascript
let nome = 'Silvia'
let idade = 23

console.log(nome) // Silvia
console.log(idade) // 23
```

Ou podemos agrupar estes valores de uma maneira que eles façam mais sentido e sejam mais fáceis de entender no meio do código:

```javascript
const pessoa = {
  nome: 'Silvia',
  idade: 23
}

console.log(pessoa.nome) // Silvia
console.log(pessoa.idade) // 23
```

De uma maneira muito simplificada, podemos pensar em objetos como sendo grupos de variáveis. Pense em como isto pode ser útil.

### Objetos com comportamento

Assim como podemos armazenar funções em variáveis ou arrays, também podemos armazená-las em um atributo de um objeto:

```javascript
const pessoa = {
  nome: 'Silvia',
  idade: 23,
  dizOi: () => console.log('Oi')
}

pessoa.dizOi() // Ira imprimir 'Oi' na tela
```

Isto é extremamente útil, pois podemos pensar de uma maneira mais orientada a objetos, o que muitas vezes nos ajuda a escrever código mais
organizado.

## Exercícios De Fixação

* Faça um programa que leia três notas de um aluno e diga se ele está aprovado ou reprovado.

Aprovado: se a média das notas for maior ou igual a 5.

Reprovado: se a média das notas for menor que 5.

A média deve ser calculada somando as três notas e dividindo o resultado por 3.

Faça o mesmo programa mostrar qual foi a maior nota do aluno. Faça o programa também mostrar qual foi a sua menor nota.

* Crie um programa que leia a idade e diga se o voto da pessoa é facultativo, obrigatório ou proibido.

  Lembrando que:

  Facultativo para adolescentes entre 16 e 17 anos. Obrigatório para adultos de 18 até 70 anos de idade. Após os 70 o voto se torna facultativo de novo. Menores de 16 anos: proibido.

