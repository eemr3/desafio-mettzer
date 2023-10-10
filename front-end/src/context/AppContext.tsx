import { ReactNode, createContext, useState } from 'react';
import { IAppContext, IArticles, IFavorites } from '../common/interfaces/app-context.';
import { useQuery } from '@apollo/client';
import { GET_FAVORITES } from '../lib/query';

export const AppContext = createContext<IAppContext>({} as IAppContext);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const { called, loading, data } = useQuery(GET_FAVORITES, {
    variables: {
      limit: 0,
    },
  });

  const [articles, setArticles] = useState<IArticles[]>([]);
  const [favorites, setFavorites] = useState<IFavorites[]>([]);
  const [favorited, setFavorited] = useState(false);
  const [query, setQuery] = useState('');
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
