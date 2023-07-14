# Relatório Técnico CanvLight

## 1. Introdução

Este relatório técnico apresenta uma visão geral do projeto do CanvLight, Canvas Inteligente, descrevendo a arquitetura e os requisitos necessários para sua implementação. O objetivo do projeto é facilitar a geração digital de Canvas de Negócios para pequenos e grandes empreendedores.

## 2. Arquitetura do Projeto
O Canvas Inteligente de Negócios é uma aplicação web que permite criar e gerenciar quadros com post-its virtuais para organização de ideias e tarefas relacionadas a projetos de negócios. A arquitetura da aplicação seguirá o padrão cliente-servidor, onde o front-end será responsável por fornecer a interface gráfica ao usuário final, enquanto o back-end será responsável por fornecer a lógica de negócios e o acesso aos dados.

### Front-end:
O front-end será desenvolvido em HTML, CSS e ReactJS e as bibliotecas JSPDF e ChartJS. O ReactJS é uma biblioteca JavaScript para construção de interfaces de usuário reativas e escaláveis, que permite a construção de componentes reutilizáveis para a interface gráfica. O HTML e CSS serão utilizados para a estruturação e estilização da página.

A arquitetura utilizada durante o projeto será a Componentização. Devido ao uso do ReactJS e seu formato de atuação, a Componentização respeita as principais práticas da biblioteca e se comunica bem com as outras bibliotecas utilizadas, além de conseguirmos fazer uma paralelização do desenvolvimento do projeto devido a metodologia Agile, usada durante todo o projeto.

## 3. Requisitos do Projeto

Os requisitos do projeto definem as funcionalidades e as restrições que o sistema deve atender. A seguir, são apresentados os principais requisitos do projeto:

## Requisitos Funcionais

| Código | Descrição | Prioridade - MoSCow
|---|---|---|
[RF001] | O sistema deve gerar o arquivo do canvas de negócio | Must
[RF002] | O sistema deve fornecer um nível de maturidade no negócio com base nos dados fornecidos | Must
[RF003] | O sistema deve disponibilizar uma página de tutorial para o uso do sistema | Must
[RF004] | A página deve possuir um modo claro e um modo escuro | Should
[RF005] | Relatório pode ser editado pelo usuário | Must
[RF006] | Relatório deve ser exportado em formato PDF | Should
[RF008] | Utilização e cálculo de métricas com base em teorias matématicas | Must

## Requisitos Não-Funcionais

| Código | Descrição | Prioridade - MoSCow
|---|---|---|
[NF001] | O sistema deve possuir usabilidade intuitiva|  Should
[NF002] | Acessibilidade para microempreendedores | Must
[NF003] | Linguagem de interação humano-computador acessível | Must
[NF004] | Compatibilidade entre dispositivos diferentes | Must
[NF005] | O site deve ter um tempo de resposta rápido e uma disponibilidade alta, usando técnicas de cache e balanceamento de carga | Should
[NF006] | O site deve seguir as boas práticas de usabilidade e acessibilidade, usando cores contrastantes, fontes legíveis, ícones intuitivos e mensagens claras | Must
[NF007] | Permitir que usuário dê feedback sobre o site | Maybe

## 4. Conclusão

Este relatório técnico apresentou a arquitetura e os requisitos do projeto, fornecendo uma visão geral das principais características e funcionalidades do sistema a ser desenvolvido. O projeto é fundamental para fomentar a democratização da divulgação de empresas e gerar um nível de maturidade com base nos dados atuais fornecidos pelo cliente.
