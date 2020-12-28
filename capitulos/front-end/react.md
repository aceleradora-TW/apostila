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

Podemos criar um componente como forma de uma função, que é atualmente o mais recomendado. Vamos criar um simples componente que retorna um Olá Mundo, mas que recebe a palavra "Mundo" via ```props``` (do inglês propertie, nos permite passar argumentos através de componentes React).

O componente seria assim: 

```javascript
import React from 'react'

export default function OlaComProps(props) {
    return (
        <h1>Olá {props.nome}</h1>
    )
}
```

Para utilizá-lo, faríamos algo do tipo:

```javascript
import React from 'react'
import OlaComProps from './ola-com-props.js';

export default function App() {
    return(
        <div>
            <OlaComProps nome="Mundo"/>
        </div>
    )
}
```

Algumas coisas para notar nesse exemplo:

- Como criamos os componentes como uma função javascript, não podemos esquecer de incluir o ```return```.
- Quando importamos o ```OlaComProps``` em ```App```, utilizamos ele como se fosse uma tag HTML, com <>.
- ```App``` também é um componente. Podemos usar componentes dentro de outros componentes sem problemas, isso vai de acordo com a necessidade da aplicação, com cuidado para não deixar a arquitetura muito complexa.
- A props ```nome``` pode ter qualquer nome e podemos criar quantas props forem necessárias.

## State

É o lugar onde os dados se transformam ao longo do tempo dentro do próprio componente. Se o componente precisa alterar algum dado em algum momento, ele deve estar dentro do ```state```, e não em ```props```. A utilização do ```state``` é opcional e aumenta a complexidade do componente. 

O React disponibiliza a função ```useState()``` que facilita a administração dos estados. Para saber mais sobre a utilização de estados, visite a [documentação oficial em português](https://pt-br.reactjs.org/docs/hooks-state.html).


## Começando uma aplicaçãp

O React tem um comando que cria uma aplicação básica em React:

```bash
npx create-react-app my-app
```

Obs.: substitua ```my-app``` pelo nome desejado para sua aplicação.
## Materiais extras

Alguns links interessantes para estudo e prática:

- [Documentação completa do React em Português](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/get-started/) (Biblioteca para a criação de formulários com React)
- [React Router](https://reactrouter.com/) (Biblioteca para criação de rotas na aplicação React)
- [Flexbox Playground](https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/) (Site que ajuda na organização do layout com flexbox)
