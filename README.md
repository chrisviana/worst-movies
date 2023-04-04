# Listagem de filmes.

O projeto tem por objeto mostrar um dashboard e uma listagem de filmes onde terá as seguintes informações:

- Dashboard
  - Listar anos com vários vencedores
  - Top 3 estúdios com vencedores
  - Produtores com maior e menor intervalo entre vitórias
  - Liste os vencedores dos filmes por anos
- Listagem de filmes
  - Exibir uma table contendo as informações de
    - ID
    - Year
    - Title
    - Winner
  - Sendo que Year e Winner podem ser utilizado como filtros. 

### Imagens e Gif da aplicação:

## Processo de desenvolvimento
Fui usado o gitflow para o desenvolvimento do projeto. Onde para as branchs task001 e task002, foi configurado a ferramenta JEST para para o teste e já criado o teste de API e para segunda banch foi configurado o layout default utlizando React Router Dom.

- Foi criado as branchs `features` para o desenvolvimento das telas de Dashboard e List
- As branchs `fix` foram utilizadas para realizar correções diversas.

## Iniciar projeto
  - Para iniciar o projeto deve se clonar o projeto
  - Apos clonar o projeto deve ir a pasta do mesmo e instalar as depencencias com `npm install`
  - O projeto pode ser iniciado com `npm run start`

## Teste unitarios
Foram criados os teste para as seguintes requisções: <br> 
- Anos com mais de um vencedor
- Estúdios
- Intervalo de prêmios
- Filme por ano

### Iniciar Teste
- Para executar os teste de API deverá executar na raiz do projeto o seguinte comando: `npm test`.
