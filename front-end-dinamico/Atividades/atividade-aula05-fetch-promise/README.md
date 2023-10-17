# Aplicativo de Piadas

Este é um aplicativo simples que permite aos usuários obter e curtir piadas de programação. Ele utiliza uma API pública de piadas e permite que os usuários vejam as piadas obtidas, as curtam e as salvem como favoritas. Além disso, as piadas curtidas são armazenadas localmente para que os usuários possam acessá-las mesmo após atualizarem a página.

## Overview

Este aplicativo tem as seguintes funcionalidades:

- Um botão "Obter Piada" que, ao ser clicado, busca uma piada de programação na API pública de piadas.
- Um espaço para exibir a piada obtida da API.
- Um botão "Próxima Piada" que permite aos usuários buscar outra piada.
- Um botão "Curtir" para marcar as piadas que os usuários gostaram.
- Uma seção que exibe as piadas curtidas pelos usuários.
- Estilização com Bootstrap para tornar a interface mais atraente.
- Um ícone de carregamento ou uma mensagem de "Carregando..." enquanto a API está sendo consultada.

## Funcionalidades

### Botão "Obter Piada"

Ao clicar no botão "Obter Piada", o aplicativo faz uma solicitação à API de piadas e exibe a piada na página. A piada pode ser de programação ou relacionada a esse tema.

### Botão "Próxima Piada"

O botão "Próxima Piada" permite aos usuários buscar uma nova piada, realizando outra solicitação à API para obter uma piada diferente.

### Botão "Curtir"

Com o botão "Curtir", os usuários podem marcar as piadas que gostaram. As piadas curtidas são armazenadas localmente.

### Lista de Piadas Curtidas

O aplicativo possui uma seção que exibe as piadas curtidas pelos usuários. As piadas curtidas são armazenadas localmente e podem ser removidas da lista.

## Deploy

* [Deploy - Aplicativo de Piadas]()

## Tecnologias

As principais tecnologias utilizadas neste aplicativo são:

- HTML
- JavaScript
- CSS
- JokeAPI (para obter piadas de programação, utilizando fetch)
- localStorage (para armazenar piadas curtidas localmente)

Requisitos para desenvolvimento:

1. Crie uma interface de usuário em HTML com um botão "Obter Piada" e um espaço para exibir a piada.

2. Use JavaScript para fazer uma solicitação a uma API pública de piadas, como a JokeAPI (https://jokeapi.dev/).

3. Exiba a piada na página após a solicitação à API.

4. Adicione um botão "Próxima Piada" que permita aos usuários buscar outra piada.

5. Forneça um botão "Curtir" para que os usuários possam marcar as piadas que gostaram.

6. Utilize localStorage para armazenar as piadas curtidas, para que os usuários possam ver as piadas favoritas mesmo após a atualização da página.

7. Implemente uma opção para remover piadas da lista de piadas curtidas.

8. Estilize a interface para torná-la mais atraente (boostrap).

9. Mostre um ícone de carregamento ou uma mensagem de "Carregando..." enquanto aguarda a resposta da API.