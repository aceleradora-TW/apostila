# React

React é uma biblioteca para Javascript no front-end que nos ajuda na criação de interfaces para o usuário. O React é um framework *component-based* (baseada em componentes), o que significa que construimos componentes encapsulados que administram o seu próprio estado, e dessa forma vários componentes constituem uma interface.

## JSX 

JSX significa Javascript Syntax eXtension, e é a sintaxe utilizada nos componentes de React. Por exemplo:

```javascript
const element = <h1>Olá, mundo!</h1>;
```

O trecho de código acima mistura HTML com Javascript, o que pode ser confuso no início, mas ajuda na hora da criação dos componentes, pois podemos usar as tags do HTML com todo o poder que Javascript nos dá. Podemos usar coisas herdadas do HTML como ```classname```, mas também podemos colocar uma expressão Javascript dentro do nosso JSX.

```javascript
function formatarNome(usuaria) {
    return usuaria.nome + ' ' usuaria.sobrenome;
};

const usuaria = {
    nome: 'Maria',
    sobrenome: 'Dias'
};

const element = (
    <h1>
        Olá, {formatName(usuaria)}
    </h1>
);
```

No exemplo acima, estamos fazendo o seguinte: primeiro, criamos uma função que recebe um objeto Javascript com dois atributos, ```nome``` e ```sobrenome``` e retorna esses dois atributos separados por um espaço. Depois, construimos o objeto propriamente dito, e ao final criamos o componente que utiliza essa função. O resultado será "Olá, Maria Dias."

## O conceito de componente

A componentização de uma página nos permite organizar melhor o UI da aplicação, cada parte sendo independente e reutilizável. Por exemplo, dentro de uma página podemos ter o componente ```Header```, ```Footer```, ```Imagem```, e assim por diante.