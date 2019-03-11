# Apostila Aceleradora

[![Build Status](https://travis-ci.org/aceleradora-TW/apostila.svg?branch=master)](https://travis-ci.org/aceleradora-TW/apostila)

## Como Acessar

Via web:

  - aceleradora-tw.github.io/apostila

Via PDF:

  - aceleradora-tw.github.io/apostila/apostila.pdf

## Como contribuir

### Gerando Conteúdo

Para adicionar conteúdo, pode-se utilizar o editor visual do próprio Gitbook.

Caso você seja familar com Git e queira editar o conteúdo na sua máquina, basta:

  - Adicionar novas páginas à pasta `capitulos/`;
  - Atualizar o sumário `capitulos/README.md` adicionando o link para as novas páginas
  - Commitar as mudanças

Recomendamos editores que suportem a visualização de Markdown:

  - [Visual Studio Code](https://code.visualstudio.com/)
  - [Typora](https://typora.io/)

Para adicionar uma imagem local aos artigos, basta colocar a imagem na pasta `imagens/`. Para referenciar esta imagem em um artigo, pode-se
usar seu caminho relativo:

```
![imagem](../imagens/nome-da-imagem.png)
```

### Visualizando o resultado localmente

### Dependências

  - Node; e/ou
  - Docker

### Execução local

__Visualizar apostila no browser local__

```bash
yarn start
```

__Gerar PDF__

```bash
yarn build
```

O PDF estará na pasta `capitulos/.vuepress/dist/apostila.pdf`
