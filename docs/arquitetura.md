# Front-end

O front-end do site será desenvolvido utilizando HTML, CSS e JavaScript. Além disso, será utilizado o framework de front-end React, para facilitar o desenvolvimento e a manutenção do código.

O front-end será responsável por coletar as informações do usuário e enviar para o servidor processar e gerar o canvas de negócios.

Serviço de interface: responsável por apresentar os resultados do canvas e da nota de maturidade ao usuário por meio de uma interface web e um arquivo PDF.

# Back-end

O back-end será desenvolvido em Node.js, uma plataforma de desenvolvimento de aplicações web em JavaScript.

O servidor recebe as informações enviadas pelo front-end e processa esses dados para gerar o canvas de negócios.

Calcula a nota de maturidade do projeto com base nas informações coletadas, utilizando algumas métricas que serão coletadas e implementadas pela equipe de desenvolvimento.

Gerador de canvas de negócios:

O gerador de canvas é responsável por transformar as informações coletadas em um modelo visual de negócios. Para isso, analisamos a possibilidade de ser utilizado um framework de geração de canvas de negócios, como o Business Model Canvas ou o Lean Canvas, mas é necessário mais algum tempo de estudo de requisitos e implementação para ver se será possível.

Caso não seja possível utilizar o framework, o canvas será gerado utilizando o Node.js.

# Comunicação

A princípio os serviços se comunicaram por meio de APIs RESTful, usando o protocolo HTTP para trocar mensagens no formato JSON.

O servidor HTTP é a camada que recebe as requisições do navegador web e as encaminha para o código Node.js, em que irá processá-las. Essa camada será implementada com o uso de um framework Node.js para servidores HTTP, como o Express.

# Deploy

O site ficará online utilizando o serviço de hospedagem de páginas fornecido pelo Github (pelo menos até o projeto ser entregue ao cliente).

## Diagrama:

| Usuário | <--> | Serviço de interface | <--> | Adquirir Informações |
| ------- | ---- | -------------------- | ---- | --------------------- |
|         |      |                      | <--> | Gerar de maturidade   |
|         |      |                      | <--> | Gerar de Canvas       |
