const responseFavoriteMock = {
  authors: [
    {
      id: 1,
      authors: 'Pedro',
      favoriteId: 1,
    },
  ],
  _type: 'Journal',
  title: 'Agora vamos ver se vai',
  description: 'Será que vai funcionar o relacionamento?',
  urls: [
    {
      id: 1,
      url: 'https://www.horadecodar.com.br/2021/09/28/como-criar-uma-api-restful-com-node-js-e-mongoose/',
      favoriteId: 1,
    },
  ],
  idArticle: '24531563',
};

const responseAuthorMock = {
  id: 1,
  authors: 'Pedro',
  favoriteId: 1,
};

const responseUrlMock = {
  id: 1,
  url: 'https://www.horadecodar.com.br/2021/09/28/como-criar-uma-api-restful-com-node-js-e-mongoose/',
  favoriteId: 1,
};

const payloadFavoriteMock = {
  authors: ['Pedro'],
  _type: 'Journal',
  title: 'Agora vamos ver se vai',
  description: 'Será que vai funcionar o relacionamento?',
  urls: [
    'https://www.horadecodar.com.br/2021/09/28/como-criar-uma-api-restful-com-node-js-e-mongoose/',
  ],
  idArticle: '24531563',
};

const responseAllFavoritesMock = [
  {
    id: 1,
    idArticle: 26405858,
    title:
      '&lt;b&gt;QUALIDADE DA ÃGUA ARMAZENADA EM RESERVATÃ“RIOS DOMICILIARES: PARÃ‚METROS FÃSICO-QUÃMICOS E MICROBIOLÃ“GICOS&lt;/b&gt;',
    _type: 'article',
    description:
      '&lt;p align="justify"&gt;Considerando-se que a Ã¡gua Ã© um nutriente fundamental para manutenÃ§Ã£o da vida e reconhecendo-se a interferÃªncia dos diversos processos utilizados no tratamento da Ã¡gua na qualidade final do produto o presente estudo foi realizado visando verificar os efeitos dos reservatÃ³rios domiciliares nas caracterÃ­sticas fÃ­sico-quÃ­micas e microbiolÃ³gicas da Ã¡gua utilizada para consumo humano na cidade de Araraquara (SP). Os resultados encontrados demonstraram discrepÃ¢ncia nos teores de ferro e turbidez para amostras coletadas nos reservatÃ³rios domiciliares, teores de cloro abaixo do preconizado em 27% das amostras e contaminaÃ§Ã£o por coliformes totais em 18,9% delas, monstrando que o reservatÃ³rio domiciliar Ã© fator deteriorador da Ã¡gua nele armazenada. PALAVRAS-CHAVE: ReservatÃ³rios domiciliares; Ã¡gua; anÃ¡lise microbiolÃ³gica; cloro.&lt;/p&gt',
    userId: 1,
    authors: [
      {
        authors: 'ADALBERTO FARACHE FILHO',
      },
      {
        authors: 'JOÃ£O BOSCO FARIA',
      },
      {
        authors: 'JULIANA ALVARES DUARTE BONINI CAMPOS',
      },
    ],
    urls: [
      {
        id: 10,
        url: 'https://doaj.org/toc/2179-4448',
        favoriteId: 7,
      },
      {
        id: 11,
        url: 'https://doaj.org/toc/0103-4235',
        favoriteId: 7,
      },
      {
        id: 12,
        url: 'http://serv-bib.fcfar.unesp.br/seer/index.php/alimentos/article/view/839',
        favoriteId: 7,
      },
      {
        id: 13,
        url: 'https://doaj.org/article/8e388bda0bc34566b655c2697fae0d10',
        favoriteId: 7,
      },
    ],
  },
  {
    id: 8,
    idArticle: 24531563,
    title: 'Agora vamos ver se vai',
    _type: 'Journal',
    description: 'Será que vai funcionar o relacionamento?',
    userId: 1,
    authors: [
      {
        authors: 'João',
      },
      {
        authors: 'Pedro',
      },
    ],
    urls: [
      {
        id: 14,
        url: 'https://www.horadecodar.com.br/2021/09/28/como-criar-uma-api-restful-com-node-js-e-mongoose/',
        favoriteId: 8,
      },
      {
        id: 15,
        url: 'https://www.magazinevoce.com.br/magazinelojadoeemr3/',
        favoriteId: 8,
      },
    ],
  },
];
module.exports = {
  responseFavoriteMock,
  responseAuthorMock,
  responseUrlMock,
  payloadFavoriteMock,
  responseAllFavoritesMock,
};
