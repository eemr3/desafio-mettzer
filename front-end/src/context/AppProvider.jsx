import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { requestGetAllFavorites } from './utils';

function AppProvider({ children }) {
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
      setIsLoading(true);
      try {
        const response = await requestGetAllFavorites(currentPage);

        setFavorites(response);
        setIsLoading(false);
      } catch (error) {
        console.info(error);
      }
    };

    getFavorites();
  }, [currentPage]);

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
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
