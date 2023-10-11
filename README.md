# Lista de Artigos

Aplicação que realiza requisição para a API [CORE API](https://core.ac.uk/docs/#!/all/search). Este projeto foi desenvolvido para um desafio, consistem em um frontend feito utilizando React.Js e um backend utilizando Node.Js com express.

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v16 ou superior
- MongoDB
- Docoker (opcional)

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:eemr3/desafio-mettzer.git
```

Entre no diretório do projeto

```bash
  cd desafio-mettzer
```

Instale as dependências

```bash
  npm install
```

### Entre na pasta `back-end`:

#### Variáveis de Ambiente

Para rodar esse projeto, você vai precisar seguir as intruções abaixo:

- Dentro da pasta `back-end` renomei o arquivo `.env.exemple` para `.env`, ele contem os valores da configuração do banco de dados e a secrete key. Altere os valores se necessário!
  - Dentro do `.env` existem duas variaveis de ambiente uma para o banco de dados `DATABASE_URL` e a outra para o secrete do JWT `JWT_SECRETE`

Observação: Se tiver o docker e docker-compose instalado e não tiver o MogoDB, após o clone entre na pasta `back-end` e utilize o comando `npm run compose:up`, que será criado um containe Docker com o MongoDB.

Use esse comando no termina

```bash
npm run compose:up
```

Obs: Existe um arquivo .env.exemple com as configurações do banco de dados, se optar por usar o comando acima já vai funcionar, caso contrário deverá alterar os valores na variável de ambiente para os valores usados no banco que está instalado o qual deseja usar.

#### Crie o banco de dados

Dentro da pasta back-end:

```bash
npm run database
```

Para rodar o back-end digite o comando:

```bash
npm run dev
```

## Entre no diretório do `front-end`

```bash
  cd front-end
```

#### Variáveis de Ambiente

Para rodar esse projeto, você vai precisar seguir as intruções abaixo:

Dentro da pasta `font-end` renomei o arquivo `.env.local.exemple` para `.env.local`, ele já contem a key e a URL para o acesso a api CORE API.

Para rodar o front-end digite o comando:

```bash
npm start
```

Obs: O back-end deve estar rodando para o front-end funcionar!

## Autor

- [@eemr3](https://www.github.com/eemr3)
