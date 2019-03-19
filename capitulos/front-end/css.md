# CSS

O Cascading Style Sheets (CSS) é uma **"folha de estilo"** e é utilizada para definir a aparência em páginas da internet que adotam para o
seu desenvolvimento linguagens de marcação (como XML, HTML e XHTML). O CSS define como serão exibidos os elementos contidos no código de
uma página da internet.

Para criar um arquivo .css, basta abrir seu editor preferido e salvar o documento com a extensão **.css** . Nele basta colocar as regras CSS
vinculadas aos elementos do documento HTML.

## Importando no HTML

O atributo rel define que o arquivo de destino é uma folha de estilo e href indica o endereço do arquivo .css.

```html
<head>
  <meta charset="UTF-8">
  <title>Exemplo dos elementos apresentados</title>
  <link rel="stylesheet" href="estilo.css">
</head>
```

## Sintaxe CSS

A sintaxe CSS é formada por três regras fundamentais para definir um estilo:

* Seletor;
* Propriedade;
* Valor.

```css
seletor {
  propriedade: valor;
}
```

O seletor vincula um elemento do documento HTML a declaração CSS. Declaração CSS é formada pela propriedade e o valor.

A propriedade define uma característica visual para o elemento HTML “selecionado” pelo seletor.

**Exemplo:** O texto de um parágrafo, marcado com elemento HTML `p`, possui uma propriedade de cor denominada `color`.

Já o valor define como isto vai ser atribuído à propriedade escolhida.

**Exemplo:** O valor da propriedade color para o elemento HTML `p` selecionado é `red` (vermelho). Ou seja, o texto do parágrafo terá uma
cor vermelha.

<img :src="$withBase('/imagens/estrutura-css.png')" alt="Estrutura de sintaxe css" style="width: 12cm; height: 8cm;" />

Com esta regra qualquer `<p>` em um documento HTML, após vinculado ao arquivo css, receberá a cor vermelha.

**Observação: Uma regra pode ter mais que uma declaração.**

```css
p {
   font-size: 14px;
   color: red;
}
```

Neste caso, o parágrafo terá a fonte de tamanho 14 pixels e sua cor será vermelha.

## Seletor por classe

Este seletor possibilita o uso em mais de um elemento da mesma página. Indicado quando você precisa atribuir algumas propriedades iguais em elementos diferentes. Para construí-lo basta que você crie um nome precedido por um ponto e o chame no elemento HTML.

**Exemplo:**

No CSS:

```css
.nome-da-classe {
  color: blue;
}
```

No HTML:

```html
<title class="nome-da-classe">Document</title>
```

Nestes casos, o título ficará azul e o seletor pode ser usado em outros elementos que você também quer que fiquem azuis.

## Seletor por atributo

Este tipo de seletor associa a um atributo utilizado em um elemento HTML.

Código no HTML:

```html
<input type="submit" value="Enviar">
```

Este é um botão para envio de dados de formulários. Podemos usar o atributo "type" com valor "submit" para estilizar o botão.

Código no CSS:

```css
input [ type = "submit" ] {
  font-weight: bold;
}
```

## Seletor por tipo de elemento

O seletor "p" que usamos nos exemplos anteriores é um seletor de tipo de elemento. Esta espécie de seletor identifica e vincula um elemento
do HTML, basta que para isso coloque o nome do elemento e depois ajuste suas propriedades.

**Exemplo:**

```css
body {
  propriedade: valor;
}

div {
  propriedade: valor;
}

p, span, strong {
  propriedade: valor;
}
```

**Segue abaixo um resumo com as principais propriedades de estilo da linguagem CSS.**

  * font-family: Define a família da fonte utilizada.

  * font-style: Define a propriedades de estilos que podem ser: normal, italic ou oblique.

  * font-size: Define o tamanho da fonte.

  * line-height: Controla a altura entre as linhas do texto de um paragrafo.

  * text-align: Controla o posicionamento horizontal do conteúdo de um elemento. Os valores possíveis são: left, right, center e justify.

  * text-decoration: Define um efeito decorativo no texto. Podendo entre eles ser: none (sem decoração); underline (sublinhado), entre
    outros.

  * color: Define a cor de um texto.

  * width: Define o comprimento (largura) de um elemento.

  * border: Define bordas para um elemento (espessura, cor).

  * height: define a altura de um elemento.

  * background: Define as propriedades relacionadas ao fundo de exibição.

  * margin: Controla as margens de um elementos. Se forem indicados quatro valores, eles dizem respeito, respectivamente, às margens
    superior, direita, inferior e esquerda. Se for fornecido apenas um valor, ele é aplicado às quatro margens.

  * padding: Controla os espaçamentos de um elemento. Se forem indicados quatro valores, eles dizem respeito, respectivamente, aos
    espaçamentos superior, direito, inferior e esquerdo. Se for fornecido apenas um valor, ele é aplicado aos quatro espaçamentos.

## Exercícios De Fixação

Baseado no material desta apostila realize cada uma das tarefas a seguir:

  * Quais são os três estilos que o font-style tem?
  * Como controlamos os espaçamentos de um elemento?
  * Como definimos o posicionamento de um elemento e quais os quatro valores possíveis?
  * Como definimos a altura de um elemento?
  * Como definimos o tamanho da fonte?
  * Como definimos a cor de uma texto?
  * Como definimos bordas para um elemento?
  * Como definimos o comprimento\(largura\) de um elemento?
  * Como controlamos as margens de um elemento?
  * O que usamos para definir a fonte?

