import { ReactNode, createContext, useState } from 'react';
import { IAppContext, IFavorites, iArticles } from '../common/interfaces/app-context.';

export const AppContext = createContext<IAppContext>({} as IAppContext);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [articles, setArticles] = useState<iArticles[]>([]);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
