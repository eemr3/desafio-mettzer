import { ApolloServer } from 'apollo-server';
import { join } from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { decodedToken } from './auth/authToken';
import { prisma } from './database/prisma/prisma.service';
import { AuthResolver } from './resolvers/auth.resolver';
import { FavoriteResolver } from './resolvers/favorite.resolver';
import { UserResolver } from './resolvers/user.resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver, AuthResolver, FavoriteResolver],
    emitSchemaFile: join(process.cwd(), 'schema.gql'),
    validate: false,
    authChecker: async ({ context: { req } }) => {
      const token = req.headers.authorization;

      if (token) {
        const decode = decodedToken(token);
        if (decode) {
          req.user = decode;

          return true;
        }
      }
      throw new Error(
        'Acesso negado! Você precisa estar autorizado para realizar esta ação!',
      );
    },
  });

  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }

  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }),
    cors: {
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:5173',
        'https://studio.apollographql.com',
      ],
    },
  });

  server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
}

bootstrap();
