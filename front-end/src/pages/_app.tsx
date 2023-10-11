import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from '../context/AppContext';
import { useApollo } from '../lib/apollo-client';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head>
        <title>Lista de Artigos</title>
      </Head>
      <main className={`${inter.className}`}>
        <ApolloProvider client={client}>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </ApolloProvider>
      </main>
    </>
  );
}
