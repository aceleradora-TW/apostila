---
layout: post
title: "Javascript"
date: 2014-07-22 16:25:06 -0700
categories: frontend
---

# JavaScript

**Para que Serve:**

O JavaScript (JS) é uma linguagem de programação utilizada principalmente em páginas web. Com o JS, você pode mostrar mensagens e outras informações interessantes, fazer verificações ou mudar dinamicamente a apresentação visual das páginas, conforme o comportamento que você deseja que sua página (ou aplicação) possua.

**Inserindo o código JavaScript na página HTML**

Para inserir o código direto na estrutura do HTML, utilizamos as tags <script> e </script>

exemplo:
```
<script type="text/javascript">
    //código JavaScript
</script>
```
 **Inserindo código JavaScript interno no HTML**
 
 O código JavaScript também pode ser mantido em um arquivo separado do HTML. 
 
exemplo:
```
 <!DOCTYPE html>
 <html>
   <head>
     <script type="text/javascript" src="meuArquivo.js"></script>
   </head>
   <body>
   </body>
 </html>
 ```
 
 **Usando variáveis no JavaScript**
 
 Essa linguagem possui tipagem dinâmica, ou seja, não é necessário definir o tipo das variáveis ao declará-las, para isso basta usar a palavra reservada __var__ ou __let__ que é basicamente, uma nova forma de declarar variáveis no JavaScript, em que todas as chaves criam um novo escopo para as variáveis; isso é, ele funciona da mesma forma que o var já funciona, porém as variáveis que estão dentro de qualquer chaves {…} não são acessíveis fora delas. 
 
 **Funções**
 
 Para criar funções, utilizamos a palavra reservada function.
 					
 exemplo:
 ```
 function minhaFuncao(p1, p2) {
 return p1 + p2;   
 //a função retorna o produto p1 e p2
 }
 ```

          

