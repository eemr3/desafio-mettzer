import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { requestGetAllFavorites } from './utils';

function AppProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('Água');
  const [inputChange, setInputChange] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [favorited, setFavorited] = useState(false);
  const [totalPagesFavorites, setTotalPagesFavorites] = useState(0);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await requestGetAllFavorites(currentPage);

        setFavorites(response);
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
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
