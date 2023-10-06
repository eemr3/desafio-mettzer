import { usePathname } from 'next/navigation';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

// Create a context object
export const AppContext = createContext<AppContextProps>({} as AppContextProps);

type AppContextProps = {
  query: string;
  articles: any[];
  setQuery: Dispatch<SetStateAction<string>>;
  setInputChange: Dispatch<SetStateAction<string>>;
  inputChange: string;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setArticles: (value: []) => void;
  favorites: any[];
  setFavorites: (value: []) => void;
  favorited: boolean;
  setFavorited: Dispatch<SetStateAction<boolean>>;
  totalPagesFavorites: number;
  setTotalPagesFavorites: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState('Água');
  const [inputChange, setInputChange] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorited, setFavorited] = useState(false);
  const [totalPagesFavorites, setTotalPagesFavorites] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        query,
        articles,
        setQuery,
        setInputChange,
        inputChange,
        currentPage,
        setCurrentPage,
        setArticles,
        favorites,
        setFavorites,
        favorited,
        setFavorited,
        totalPagesFavorites,
        setTotalPagesFavorites,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
