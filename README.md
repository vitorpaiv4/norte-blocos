# Norte Blocos

Este é o site da empresa Norte Blocos, que exibe produtos como blocos de concreto para construção. O projeto é desenvolvido em React e utiliza Tailwind CSS para estilização.

## Visão Geral

O site possui uma barra de navegação com links para Home, About e Contact, e uma seção principal que exibe produtos com suas respectivas imagens, descrições e preços.

## Tecnologias Utilizadas

- React
- Tailwind CSS
- Heroicons

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

/src
|-- /assets
| |-- novalogo.png
| |-- product1.png
| |-- product2.png
| |-- product3.png
|
|-- /components
| |-- Navbar.js
| |-- Hero.js
|
|-- App.js
|-- index.js


## Instalação

Siga os passos abaixo para instalar e executar o projeto localmente:

1. Clone o repositório:

    ```bash
    git clone <URL-do-repositorio>
    cd norte-blocos
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Execute o projeto:

    ```bash
    npm start
    ```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Uso

### Navbar

A barra de navegação contém o logotipo centralizado e links para Home, About e Contact alinhados à direita.

### Hero Section

A seção principal contém uma mensagem de boas-vindas e exibe os produtos com suas imagens, títulos, descrições, preços atuais e preços antigos.

### ProductCard Component

Cada produto é representado pelo componente `ProductCard` que exibe a imagem, título, descrição, preço atual e preço antigo.

## Contribuição

Sinta-se à vontade para contribuir com o projeto enviando pull requests. Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de mudar.
