# Lista de Artigos

Aplicação que realizar requisição para a API [CORE API](https://core.ac.uk/docs/#!/all/search).

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v16 ou superior
- MySQL v8
- Docoker (opcional)

Observação: Se tiver o docker instalado e não tiver o mysql, basta cria um container com o mysql.

Exemplro de um container myslq na versão 8

Use esse comando no termina
```bash
docker run -p 3306:3306 --name mysql_80 -e MYSQL_ROOT_PASSWORD=seupassword -d mysql:8 mysqld --default-authentication-plugin=mysql_native_password

```
Obs: Existe um arquivo .env.exemple com as configurações do banco de dados, se optar por usar o comando acima já vai funcionar, caso contrário deverá alterar os valores na variável de ambiente para os valores usados no banco que está instalado o qual deseja usar.

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

Entre no diretório do back-end

```bash
  cd back-end
```
Digite o comando: 
```bash
npm run dev
```

Entre no diretório do front-end
```bash
  cd front-end
```
Digite o comando:
```bash
npm start
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

Entre na pasta `font-end` e renomei o arquivo `.env.development.exemple` para `.env.development`, ele já contem a key para o acesso a api CORE API.

Entre na pasta `back-end`: 
- Renomei o arquivo `secrete.key.exemple` para `secrete.key`, ele já contem a chave secreta para o JWT.
- Renomei o arquivo `.env.exemple` para `.env`, ele contem os valores da configuração do banco de dados. Altere os valores se necessário!


Obs: Só estão indo esse arquivo com a key, as configurações do banco de dados e a chave secreta por motivo de desafio, em um projeto rael esses valores não sobem para o github.

## Crie o banco de dados

Dentro da pasta `back-end` rode o comando:

```bash
npm run database
``` 
O banco de dados é criado com as tabelas `users`, `favorites`, `authors` e `urls`. A tabela `users` é populado com dados de um usuário.

#### Dados para realizar o login: 
```bash
email: ichigo@email.com
senha: 123456
```

### Informção do Front-end da aplicação

- Diretório do Front-end

```bash
  cd front-end
```

- [Front-End](https://github.com/eemr3/desafio-mettzer/tree/main/front-end)

### Informção do Back-end da aplicação

- Diretório do Back-end

```bash
  cd back-end
```
- [Back-End](https://github.com/eemr3/desafio-mettzer/tree/main/back-end)