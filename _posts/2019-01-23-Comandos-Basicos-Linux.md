---
layout: post
title: "Linux"
date: 2013-05-22 16:25:06 -0700
categories: linux
---

## Comandos Básicos

`cd [nome da pasta/]`
Comando para entrar ou mudar de pasta.

`cd ..`
Volta um nível.

`ls`
Lista conteúdo da pasta onde o usuário se encontra.

`ls -l`
Lista todos os itens da pasta atual com detalhes

`mkdir [nome da pasta]`
Cria nova pasta onde o usuário se encontra.

`rm -rf [nome da pasta]`
Remove pasta especificada.

`touch [nome do arquivo]`
Cria um arquivo onde o usuário se encontra.

`rm [nome do arquivo]` 
Remove o arquivo.

`mv item destino` 
Move o arquivo (ou pasta) ao destino escolhido.

`cp item copia-do-item` 
Cria uma cópia do arquivo (ou pasta).

`man [nome do comando]`

O comando "man" exibe a função de determinado comando. Ele é muito útil quando não se sabe o que um comando faz, ou quando se pretende
aprender mais sobre a sua utilização. Aconselha-se a leitura do manual sempre que houver dúvidas.


## Flags

Flags são diferentes funcionalidades do comando que podemos utilizar, ou seja, moldar o que o comando irá fazer.

Tomemos o comando `ls` como exemplo. Como mencionado anteriormente, este comando serve para listar o conteúdo de um diretório. Temos a
seguinte estrutura de pastas:

```
uma-pasta/
├── arquivo.txt
└── pasta-filha
    └── pasta-neta
```

Quando estamos dentro da pasta `uma-pasta` e executamos o comando `ls`, a saída será:

```sh
$ ls
arquivo.txt  pasta-filha
```

Podemos usar as __flags__ para modificar o comportamento do comando ls. Passando a flag `-l`, o comando mostrará a saída em formato de
lista:

```sh
$ ls -l

total 12
-rw-r--r-- 1 yrachid yrachid    0 jan 23 11:27 arquivo.txt
drwxr-xr-x 3 yrachid yrachid 4096 jan 23 11:27 pasta-filha

```

A maioria dos comandos, possui a flag `-h ou --help`, que irá mostrar todas as flags que você pode usar para aquele comando.

__Formatos de flags__

Geralmente, as flags dos comandos possuem dois formatos: `abreviado` e `expandido`.

Por exemplo, quando chamamos o comando como no exemplo `rm -rf` a parte em que usamos `-rf` estamos falando para o comando que queremos
fazer um `remove` recursivo (flag `-r`) e forçado (flag `-f`). Neste caso, usamos o formato __abreviado__ destas flags, mas também poderíamos
utilizar seus formatos expandidos:

```sh
rm --recursive --force
```

## Exemplos

**man ls** – Exibe o que faz o comando ls e quais são suas variações.
Para sair do man pressione a tecla “q”.


# EXERCÍCIOS DE FIXAÇÃO

Baseado no material desta apostila informe os comandos necessários para realizar cada uma das tarefas a seguir:

Imagine que estamos na seguinte estrutura de diretórios:

![imagem](images/imagemLinux01.png)

- [ ] Liste os arquivos do diretório  `aceleradora`.

- [ ] Entre no diretório `pasta`.

- [ ] Dentro do diretório `pasta` crie um arquivo chamado `arquivo02.txt`.

- [ ] Volte ao diretório anterior.

- [ ] Sem sair do diretório atual, copie o arquivo `compactado.zip` para dentro do diretório `pasta`.
