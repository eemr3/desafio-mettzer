import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getCookie } from '../common/cookies';
import { useMemo } from 'react';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000',
// });
// const token = getCookie('access_token');

// )
// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? token : '',
//     },
//   };
// });

// const createApolloClient = () => {
//   return new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });
// };

// export default createApolloClient;

let apolloClient: any;

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
  });

  const authLink = setContext((_, { headers }) => {
    // Obtenha o token de autenticação
    const token = getCookie('access_token'); // Implemente esta função para obter o token de onde você o armazenou

    return {
      headers: {
        ...headers,
        authorization: token ? token : '', // Adicione o token aos cabeçalhos, se disponível
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}
