# Documento de Arquitetura - Front-end e Back-end do Canvas Inteligente de Negócios

## Introdução:
Este documento tem como objetivo descrever a arquitetura da aplicação do Canvas Inteligente de Negócios e as tecnologias utilizadas no desenvolvimento do front-end e back-end. O front-end será desenvolvido em HTML, CSS e ReactJS, enquanto o back-end será desenvolvido em NodeJS.

## Visão geral da arquitetura:
O Canvas Inteligente de Negócios é uma aplicação web que permite criar e gerenciar quadros com post-its virtuais para organização de ideias e tarefas relacionadas a projetos de negócios. A arquitetura da aplicação seguirá o padrão cliente-servidor, onde o front-end será responsável por fornecer a interface gráfica ao usuário final, enquanto o back-end será responsável por fornecer a lógica de negócios e o acesso aos dados.

## Front-end:
O front-end será desenvolvido em HTML, CSS e ReactJS. O ReactJS é uma biblioteca JavaScript para construção de interfaces de usuário reativas e escaláveis, que permite a construção de componentes reutilizáveis para a interface gráfica. O HTML e CSS serão utilizados para a estruturação e estilização da página.

A arquitetura do front-end será baseada no padrão Flux, que é uma arquitetura de dados unidirecional que utiliza fluxos de dados unidirecionais para gerenciar o estado da aplicação. Essa arquitetura consiste em três componentes principais: ações (actions), despachantes (dispatchers) e lojas (stores).

## Back-end:
O back-end será desenvolvido em NodeJS, que é uma plataforma de desenvolvimento de aplicações de alto desempenho baseada em JavaScript. O NodeJS permite o desenvolvimento de aplicações de rede escaláveis e eficientes, com suporte para protocolos de rede, bancos de dados e outras bibliotecas.

A arquitetura do back-end será baseada em microsserviços, que é uma abordagem arquitetural para o desenvolvimento de sistemas distribuídos, onde cada serviço é um componente independente e modular da aplicação. Cada serviço terá sua própria camada de acesso a dados, permitindo o uso de diferentes bancos de dados para diferentes serviços.
