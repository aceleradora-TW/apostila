---
layout: post
title: "Comandos Básicos"
date: 2013-05-22 16:25:06 -0700
categories: git
---
                       
# Git e GitHub

## Git

   Git é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente no mesmo, permitindo que os mesmos possam existir sem o risco de suas alterações serem sobrescritas. Se não houvesse um sistema de versão, imagine o caos entre duas pessoas abrindo o mesmo arquivo ao mesmo tempo. Uma das aplicações do git é justamente essa, permitir que um arquivo possa ser editado ao mesmo tempo por pessoas diferentes.

## GitHub

   O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando Git. Nele criamos repositórios onde colocamos nossos projetos que vamos desenvolver. No Github o projeto é dividido em branches,elas são separações de código. Normalmente são utilizados para separar alterações ou novas funcionalidades do projeto. 
   
### Instalação

Você instalará o Git com este comando (via terminal - Linux):
 
 `-sudo apt-get install git`

Após isso já poderá realizar os comando do git pelo terminal.

### Comando básicos do Git 

`git clone [link da branch]`
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

`git pull origin master`
Recebe as alterações feitas na branch remota origin master (caso exista) 

`git push origin master`
Sobe as alterações para a branch remota origin master (caso exista)
