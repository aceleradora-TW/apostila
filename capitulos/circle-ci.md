---
layout: post
title: "CircleCi"
date: 2014-07-22 16:25:06 -0700
categories: CircleCi
---

# Beleza, então como começar?
  Faça o cadastro no https://circleci.com/ e inicie o projeto selecionando o seu repositório (github).
  
  Agora Vá em *Add projects* que irá listar todos os seus projetos, escolha um e clique *Set Up Project*
  
  ![imagem](https://cdn-images-1.medium.com/max/1400/1*J2B3haJ45v5x6S9TuTHZVQ.png)
  
  Agora escolha o Sistema Operacional e a linguagem.
  
  ![imagem](https://cdn-images-1.medium.com/max/1400/1*9-juW30_LU-S1QFqYZ1F2A.png)
  
  Crie uma pasta nomeada .circleci adicione um arquivo config.yml(Preencha o config.yml com o conteúdo do arquivo.yml (mostrado abaixo no site)).
          
  E então atualize o arquivo .yml para ficar de acordo com seu projeto.                                                      

# EXERCÍCIOS DE FIXAÇÃO

Criando um projeto com CircleCI

![imagem](https://lh6.googleusercontent.com/Nk3EgMoLkXRv5WQ9I9fZ-oZonRhwHCyFGG1w4R4-wzwssbL3H4V9uGMEO7d7ms7-jnxFIRwkOT3Ir2isehgBp7T5HwIofQOjAZwKVFtCNT_Pt4Z5eSkHar8WoAkgV2Dn6FLiNXFTpFE)
    Acesse à aba Projects e adicione um novo projeto.

![imagem](https://lh6.googleusercontent.com/40VkSUBxfVzeB4jrOxXZb2gLCILfFnpFZ4qoTthKLNrD9sBzCz2W5jYBqfSjVT6mNbE-WGu1ueIahpwHkA_sRV02-rY-5F_f83kBjTIH)
    Nesta tela, são exibidos todos os projetos existentes no github linkado. Selecione o projeto desejado clicando em Setup project.

![imagem](https://lh3.googleusercontent.com/n600D0V5T5Hfv_NSzAZ8jGUUdeeR0Y03CBg1mXdLuRC13g2bWmzpSEA9Oqjpp8Bk36NDoO7Zp2zlR0fueyEwnkiEbd0-8DZJYQrnBViDW65W_1PaucTdg88w1jOiP-8KXSUIKr4slOM)
    Informações e configurações, como seleção do sistema operacional desejado, plataforma e linguagem do projeto que já vem configurada com a linguagem selecionada.

![imagem](https://lh5.googleusercontent.com/QRGWYYoFynGGD8NCJKsZVbffD5EGaBGnnqZUDuNG7w9aqWTpEx1s5UytH6e8_MFGC-8Qwn333Qm1wDiAx8Q-7ZnFdICBOEqfRmmmJ34FVuxZolv0w8769UI_OtsMKaRJjdFbE1yFzeQ)
    É possível saber como podemos configurar nosso projeto passo-a-passo para que a execução automática ocorra.Primeiramente, vamos criar o arquivo config.yml dentro do diretório .circleci/ no nosso projeto. Após isto, vamos copiar o conteúdo o Sample.yml sugerido pelo CircleCI para o arquivo config.yml.

