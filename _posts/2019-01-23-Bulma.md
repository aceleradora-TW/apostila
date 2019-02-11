---
layout: post
title: "Bulma Framework CSS"
date: 2014-07-22 16:25:06 -0700
categories: frontend
---


O Bulma é uma estrutura CSS livre e de código aberto baseada no Flexbox (organiza elementos na página quando o layout precisa ser visualizado em telas e dispositivos de tamanhos diferentes).

**A configuração**

Configurar o Bulma é super fácil, e você pode fazê-lo de várias maneiras diferentes, baixá-lo diretamente dos documentos ou usando um CDN. Após instalar o bulma, adicionaremos ao código:

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">`

Isso nos dará acesso às classes Bulma. E isso é tudo o que Bulma é: uma coleção de classes.

**Modificadores (classes)**

A primeira coisa que você deve aprender sobre o Bulma são as classes modificadoras. Estes permitem que você defina estilos alternativos para quase todos os elementos Bulma. Todos começam com  is-* ou has-*, e então você substitui o *com o estilo que você quer.

***Vamos começar com alguns exemplos básicos:***

*Botões*

para transformar um botão normal em um botão Bulma, vamos simplesmente dar a classe de button.

`<button class = "button">Click here</ button>`

Que resulta no seguinte estilo:

![Imagem](https://cdn-images-1.medium.com/max/1600/1*03TOy6dVBDCPvrlardUBHw.png)

Como você pode ver, ele tem um bom design plano por padrão. Para mudar o estilo, usaremos modificadores Bulma. Vamos começar fazendo o botão maior (classe “is-larger”), verde (classe "is-success") e com cantos arredondados (classe "is-rounded"):


`<button class = "button is-larger is-success is-rounded">Click here</ button>`

O resultado é um botão de aparência agradável:

![Imagem](https://cdn-images-1.medium.com/max/1600/1*mk04rubImZHTpMNPhsn-TQ.png)

Finalmente, vamos também usar um dos “has-*”modificadores. Eles normalmente controlam o que está dentro do elemento. No nosso caso, o texto. Vamos adicionar “has-text-weight-bold” para deixar o texto em negrito.

Aqui está o resultado:

![Imagem](https://cdn-images-1.medium.com/max/1600/1*H30F0Q92eL_IGipfEE3lWg.png)

Eu recomendo que você brinque com combinações das várias classes para entender como esse sistema é flexível. As combinações são quase infinitas. Confira a seção de botões nos documentos para mais informações.

**Colunas**

O principal de qualquer framework CSS é como eles resolvem colunas, o que é relevante para quase todos os sites que você já construiu. O Bulma é baseado no Flexbox, então é muito simples criar colunas. Vamos criar uma linha com quatro colunas.

```
<div class="columns">
      <div class="column">First column</div>
      <div class="column"> Second column </div>
      <div class="column"> Third column </div>
      <div class="column"> Fourth column </div>
</div>
```

Primeiro, estamos criando uma `<div>` container com uma classe `“columns”`, em seguida, damos a cada uma das divs menores uma classe `“column”`. Isso resulta no seguinte:

![Imagem](https://cdn-images-1.medium.com/max/2000/1*p0XiWjzp00GGdgrmrCtwYA.png)

Observe que você pode adicionar quantas colunas desejar. O Flexbox se encarrega de dividir o espaço igualmente entre eles.

Para dar as cores das colunas, podemos substituir o texto dentro delas por uma `<p>` tag e dar a ela a “notification” classe e um "is-*" modificador. Assim, por exemplo:

`<p class = "notification is-success"> Primeira coluna </p>`


Vamos fazer isso usando os `“is-info”`,  `“is-success”`, `“is-warning”` e `“is-danger”` modificadores, o que resulta no seguinte:

![Imagem](https://cdn-images-1.medium.com/max/2000/1*7c9Ygeq5NbrBYQfnVUFDwA.png)

A classe “notification” é, na verdade, apenas destinada a alertar os usuários sobre algo, pois permite preencher o plano de fundo com uma cor usando os "is-*" modificadores.

Também podemos controlar facilmente a largura de uma coluna. Vamos adicionar o "is-half" modificador à coluna verde.

```
<div class="column is-half">
   <p class = "notification is-sucess"> Segunda coluna </p>
</div>
```

O que resulta na segunda coluna ocupando agora metade da largura, enquanto os outros três ocupam um terço da metade restante de cada um.

![Imagem](https://cdn-images-1.medium.com/max/1400/1*2oogxdeNyRZ7Y9oxLXNqBg.png)

**Hero**

Finalmente, vamos também aprender como criar um hero em Bulma. Vamos usar a semântica `<section>`, dar uma classe “hero” e “is-info” dar alguma cor. Também precisamos adicionar uma `<div>` criança à turma hero-body.

```
<section class="hero is-sucess">
c     <div class = "hero-body"> </ div>
</section>
```


O resultado será este:

![Imagem](https://cdn-images-1.medium.com/max/1000/1*mRUKo5nMrlRmNRlFhFxXqA.png)

Para fazer esse hero fazer algo significativo, vamos adicionar um elemento de contêiner dentro do corpo e adicionar um título e uma legenda.
```
<div class="container">
     <h1 class="title">Primary title</h1>
     <h2 class="subtitle">Primary subtitle</h2>
</div>
```
![Imagem](https://cdn-images-1.medium.com/max/1000/1*zgiaCn1QmbMn-r4d-p9exA.png)

Agora está começando a ficar bom! Se quisermos que seja maior, podemos simplesmente adicionar "is-medium" na própria tag:
```
<section class="hero is-info is-medium">
 …
</section>
```
![imagem](https://cdn-images-1.medium.com/max/1000/1*7jJFSeUFbzSuavVUpVV7Zw.png)

E é isso!

Existem vários componentes como cards, tabelas, menus, barras de navegação e várias outras coisas fáceis de usar e simples de compreender.
Você agora tem um gostinho básico de como Bulma funciona, e a melhor parte é que o resto da biblioteca é tão intuitivo e fácil quanto os conceitos que você viu até agora. Então, se você entender isso, você entenderá o resto sem problemas.

Caso queira explorar, a documentação do Bulma se encontra em: https://bulma.io/documentation/

# EXERCÍCIOS DE FIXAÇÃO

Baseado no material desta apostila realize cada uma das tarefas a seguir:

* Crie um botão e mude ele para tres cores diferentes usando as classes do bulma;

* Mude a largura do botão;

* Deixe o botão arredondado;

* Crie um Hero;

* Mude o tamanho do Hero;

* Modifique o que está dentro do elemento, no nosso caso o texto do botão;

* Crie uma coluna e defina a sua largura.