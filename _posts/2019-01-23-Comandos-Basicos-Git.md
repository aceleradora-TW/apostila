---
layout: post
title: "Git e GitHub"
date: 2013-05-22 16:25:06 -0700
categories: git
---

## Git

   Git é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente no mesmo, permitindo que os mesmos possam existir sem o risco de suas alterações serem sobrescritas. Se não houvesse um sistema de versão, imagine o caos entre duas pessoas abrindo o mesmo arquivo ao mesmo tempo. Uma das aplicações do git é justamente essa, permitir que um arquivo possa ser editado ao mesmo tempo por pessoas diferentes.

## GitHub

   O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando Git. Nele criamos repositórios onde colocamos nossos projetos que vamos desenvolver. No Github o projeto é dividido em branches,elas são separações de código. Normalmente são utilizados para separar alterações ou novas funcionalidades do projeto. 
   
### Instalação

Você instalará o Git com este comando (via terminal - Linux):
 
 `-sudo apt-get install git`

Depois de instalar, a primeira coisa que você deve fazer é configurar o Git. Para isso, abra uma janela de terminal e digite os seguintes comandos:
 ```
 git config --global user.name "Seu Nome"
 git config --global user.email "seu@email.com"
```

A partir daí, o Git irá usar essas informações para registrar quem foi que fez as alterações nos arquivos.


Após isso já poderá realizar os comando do git pelo terminal.

**Nota:** Esse exemplo configura o mesmo usuário para todos os projetos presentes no computador (isso se dá por conta da flag --global). Podemos também configurar usuários para cada projeto, bastando remover a flag `--global`.

### Comando básicos  

**Criando um repositório:**

Criar um repositório no Git é muito simples, apenas siga esta sequência completa dos comandos:

`mkdir meu-projeto`(irá criar o diretório)

`cd meu-projeto`(irá entrar dentro do diretório)

`git init`(irá criar o repositório git)

Após isso, basta começar a trabalhar, criando, removendo e alterando arquivos.

**Outros Comandos:**

`git clone [link do repositório]`
Para clonar o projeto do repositório;

`git checkout -b [nome da branch]`
Para criar uma nova branch;

`git checkout [nome da branch]`
Para trocar de branch;

`git status` 
Para você visualizar os arquivos que modificou;

`git add .`
Para você adicionar as modificações feitas;

`git commit -m [“mensagem”]`
Para você comentar brevemente sobre as modificações feitas;

`git push origin [nome da branch]`
Sobe as alterações feitas para a branch remota(para onde quero enviar, por isso usamos *origin*) do **GitHub**

`git pull origin master`
Recebe as alterações feitas na branch remota origin master;

Mas se houver conflitos:

`git pull -r origin master` Facilita na hora de resolver conflitos.

Ex: Deram push em uma atualização de código da linha 11, e você localmente modificou esta linha e quer dar push, o git ficará sem saber o que fazer e resultará em conflitos, você terá que escolher entre uma das atualizações,ou em deixar as duas.


Após isso para ter certeza de que não tenha mais nada diferente execute:  

`git rebase --continue`

**Nota:** Este comando só funcionará se usar a flag `-r` no `git pull`

Se não houver mais conflito pode dar seu push tranquilo, caso contrario terá que resolver todos os conflitos para dar push.

`git reverse --hard HEAD~1`
Exclui commit local

Caso já tenha enviado ao seu repositório será necessário executar este comando também para exclui-lo:

`git push origin HEAD --force`

**Importante: Não é muito recomendável usar estes últimos dois comandos exceto em casos muito extremos, eles podem causar grandes complicações.**

# EXERCÍCIOS DE FIXAÇÃO 

Baseado no material desta apostila informe os comandos necessários para realizar cada uma das tarefas a seguir:

Imagine que criamos um repositório no GitHub:

- [ ] Clone este repositório para seu computador

- [ ] Crie uma branchs

- [ ] Entre na branch criada

- [ ] Envie as modificações para o repositório




- [ ] Acesse o site do GitHub e crie um repositório chamado `exercicioGitHubAcelera`

- [ ] Agora, dentro de algum diretório de seu computador, inicie um repositório Git local

- [ ] Clone este repositório (`exercicioGitHubAcelera`) para seu computador

- [ ] Faça qualquer alteração neste diretório (crie arquivos novos, modifique algum existente e etc) e em seguida adicione estas alterações neste repositório Git local

- [ ] Realize um `commit` destas alterações ao seu repositório Git local, informando uma mensagem explicando o que esta sendo salvo neste `commit`

- [ ] Agora, envie as modificações para o repositório