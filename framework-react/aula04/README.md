# React Router

#### O que é roteamento no contexto de páginas web?

- O roteamento é um mecanismo que permite aos usuários navegar entre diferentes páginas ou partes de uma aplicação;
- No contexto da web, o roteamento é responsável por gerenciar as URLs que são exibidas no navegador.

#### Introdução: Roteamento de páginas tradicional

![Alt text](image.png)

#### Introdução: Roteamento de páginas SPA

![Alt text](image-2.png)

#### Introdução: SPA vs Tradicional

![Alt text](image-3.png)

### O que são as Rotas?

- As rotas são a **URLs** que representam os diferentes **caminhos** para chegar nas páginas da aplicação;

### O que é o React Router?

- O *React Router* é uma **biblioteca** que permite implementar o **roteamento do lado do cliente** em aplicações React;
- O React Router usa um padrão de roteamento REST para definir as rotas da aplicação.


### Como usar o React Router?

- Instale o React Router no projeto (**npm install react-router-dom**);
- Importe os componentes **BrowserRouter, Route, Routes** o arquivo App.js;
- Crie componentes para cada rota;
- Use o componente **Routes** para renderizar as rotas.

Ex:

![Alt text](image-4.png)


### Como criar links de navegação?

- React Router fornece o **componente Link** para criar links de navegação;
- O componente Link renderiza um elemento HTML com um atributo **href** que corresponde ao caminho da rota.

Ex:

![Alt text](image-5.png)