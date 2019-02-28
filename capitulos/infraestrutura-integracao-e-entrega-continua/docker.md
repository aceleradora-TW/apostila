---
layout: post
title: Docker
date: '2014-07-22 16:25:06 -0700'
categories: Docker
---

# Docker

Docker é uma plataforma open-source escrita em GO cuja finalidade é criar ambientes isolados para aplicações e serviços. Com esse isolamento o docker garante que cada container tenha tudo que um serviço precisa para ser executado.

Uma das vantagens dessa abordagem é você poder iniciar esse serviço em qualquer máquina que sempre irá rodar da forma esperada, com bibliotecas, dependências e permissões configuradas da forma correta, sem surpresas.

**Instalando o Docker**

`apt-get install docker.io`

**Comandos Básicos**

```text
docker pull [nome da imagem];
```

Baixa a imagem.

```text
docker images;
```

Lista todas as imagens baixadas

```text
docker run [nome da imagem];
```

Inicia um container da imagem que você escolheu.

```text
docker ps;
```

Lista os containers em execução

```text
docker stop
```

Para a execução de todos dos containers

```text
docker rm
```

Exclui todos os containers criados

_**Nota:**_ Para parar/excluir um container especifico, é só colocar o nome do contaneir no final dos comandos listados.

## EXERCÍCIOS DE FIXAÇÃO

Baseado no material desta apostila informe os comandos necessários para realizar cada uma das tarefas a seguir:

Imagine que instalamos o docker

* [ ] Baixe a imagem
* [ ] Liste todas as imagens baixadas
* [ ] Inicie um container da imagem que você escolheu
* [ ] Liste os containers em execução
* [ ] PARE a execução de todos os containers
* [ ] Exclui os containers criados

