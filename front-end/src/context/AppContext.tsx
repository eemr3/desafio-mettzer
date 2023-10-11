import { useQuery } from '@apollo/client';
import { ReactNode, createContext, useState } from 'react';
import { DataFovorite, IAppContext, IArticles } from '../common/interfaces/app-context.';
import { GET_FAVORITES } from '../lib/query';

export const AppContext = createContext<IAppContext>({} as IAppContext);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [limit, setLimit] = useState(1);
  const page = Math.floor(limit / 10) === 0 ? 1 : Math.floor(limit / 10 + 1);
  const { called, loading, data } = useQuery(GET_FAVORITES, {
    variables: {
      limit: page,
    },
  });

  const [articles, setArticles] = useState<IArticles[]>([]);
  const [favorites, setFavorites] = useState<DataFovorite[]>([]);
  const [favorited, setFavorited] = useState(false);
  const [query, setQuery] = useState('água');
  const [inputChange, setInputChange] = useState('');

  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
        favorites,
        setFavorites,
        favorited,
        setFavorited,
        query,
        setQuery,
        inputChange,
        setInputChange,
        data,
        setLimit,
        limit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
