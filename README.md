# Apostila Aceleradora

[![Build Status](https://travis-ci.org/aceleradora-TW/apostila.svg?branch=master)](https://travis-ci.org/aceleradora-TW/apostila)

## Como Acessar

  - Leia online no [Gitbook](https://aceleradora-tw.gitbook.io/agil/)
  - Leia em [PDF](https://github.com/aceleradora-TW/apostila/releases/latest)
    - Ao acessar o link acima, faça o download do arquivo `apostila-aceleradora.pdf`


## Como contribuir

### Gerando Conteúdo

Para adicionar conteúdo, pode-se utilizar o editor visual do próprio Gitbook.

Caso você seja familar com Git e queira editar o conteúdo na sua máquina, basta:

  - Adicionar novas páginas à pasta `capitulos/`;
  - Atualizar o arquivo `capitulos/sumario.md` adicionando o link para as novas páginas
    - Para entender melhor como o sumário funciona, veja [esta página](https://toolchain.gitbook.com/pages.html)
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

Apostila feita com [Gitbook toolchain](https://toolchain.gitbook.com/setup.html).

### Dependências

  - Node; e/ou
  - Docker
  - Calibre

Instale o Gitbook toolchain:

```bash
npm install -g gitbook-cli
```

Instale o Calibre de acordo com as [instruções do Gitbook](https://toolchain.gitbook.com/ebook.html).

__Caso você não queira instalar o Node nem o Calibre, utilize o Docker__

### Execução local

Caso você pretenda usar Docker, construa a imagem primeiro:

```bash
./tarefas docker-build
```

__Visualizar apostila no browser local__

```bash
# Sem docker
./tarefas serve

# Com docker
./tarefas docker-serve
```

__Gerar PDF__

```bash
# Sem docker
./tarefas pdf

# Com docker
./tarefas docker-pdf
```
