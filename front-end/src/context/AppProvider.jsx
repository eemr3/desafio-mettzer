import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { requestGetAllFavorites } from './utils';
import { useLocation } from 'react-router-dom';

function AppProvider({ children }) {
  const { pathname } = useLocation();
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState('Água');
  const [inputChange, setInputChange] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorited, setFavorited] = useState(false);
  const [totalPagesFavorites, setTotalPagesFavorites] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFavorites = async () => {
      if (pathname === '/home') {
        setIsLoading(true);
        try {
          const response = await requestGetAllFavorites();

          setFavorites(response.items);
          setIsLoading(false);
        } catch (error) {
          console.info(error);
        }
      }
    };

    getFavorites();
  }, [currentPage, favorited, pathname]);

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
}

export default AppProvider;
