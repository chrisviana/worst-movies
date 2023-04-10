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

![Screenshot_3](https://user-images.githubusercontent.com/19362661/229874587-b9361adc-3e3d-4935-a07c-9384e9e27a51.png)
![Screenshot_4](https://user-images.githubusercontent.com/19362661/229874589-9a4c2c57-6daa-40c6-bf82-9a21fc7ed6c6.png)
![Screenshot_5](https://user-images.githubusercontent.com/19362661/229874663-474b810f-0e0e-40d4-922b-9aa36a90062c.png)
![Screenshot_6](https://user-images.githubusercontent.com/19362661/229874668-2eec82e7-5328-4ce8-a398-0659509e1907.png)
![Screenshot_7](https://user-images.githubusercontent.com/19362661/229874710-8f195858-f7a0-4561-84f5-8441b4c47f52.png)
![Screenshot_8](https://user-images.githubusercontent.com/19362661/229874714-6b4b780e-cce1-40f5-aaae-94bfbd602802.png)
![Aplicação](https://user-images.githubusercontent.com/19362661/229874727-66bf5405-a70e-48b0-9d48-06f39cdcada9.gif)

## Processo de desenvolvimento

Fui usado o gitflow para o desenvolvimento do projeto. Onde para as branchs task001 e task002, foi configurado a ferramenta JEST para para o teste e já criado o teste de API e para segunda banch foi configurado o layout default utlizando React Router Dom.

- Foi criado as branchs `features` para o desenvolvimento das telas de Dashboard e List
- As branchs `fix` foram utilizadas para realizar correções diversas.

### Padronizaão

- Para cada componente é criado uma pasta dentro de components com o nome do componente.
  - Dentro da pasta é criado um arquivo `index.jsx` para criação do componente e um `style.js` para personalização do componente caso exista.
- Caso o componente que foi criado na pasta components tenha um componente especifico dele é cirado dentro da pasta do componete uma pasta chamada de `components` pois esse componente pertence a somente o componente pai.

## Iniciar projeto

- Para iniciar o projeto deve se clonar o projeto
- Apos clonar o projeto deve ir a pasta do mesmo e instalar as depencencias com `npm install`
- O projeto pode ser iniciado com `npm start`

## Teste unitarios

Para manter um padronização de arquivos de teste foi criado a pasta `__tests__` em components e page onde foi criado os arquivos com o mesmo nome da pagina ou componente seguindo te `.test.jsx` ou `.test.jsx`

- Foram criados os testes para as requisições da API.
- Foram criado os testes para os compoentes e as paginas.

### Iniciar Teste

- Para executar os teste de API deverá executar na raiz do projeto o seguinte comando: `npm test`.
