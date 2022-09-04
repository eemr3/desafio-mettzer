import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AppContext } from './AppContext';
import { requestGetAllFavorites } from './utils';
import { getListArticle } from './utils';

function HomeProvider({ children }) {
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
        setTotalPagesFavorites(response.length);
        const dataFavorites = response.map((item) => ({
          authors: item.authors.map((a) => a.authors),
          _type: item._type,
          title: item.title,
          description: item.description,
          idFav: item.id,
          urls: item.urls.map((u) => u.url),
          id: item.idArticle,
        }));

        setFavorites(dataFavorites);
      } catch (error) {
        console.log(error);
      }
    };

    getFavorites();
  }, [favorited, currentPage]);

  useEffect(() => {
    const allListArticle = async () => {
      try {
        const result = await getListArticle(query, currentPage);

        setArticles(result.map((item) => ({ _type: item._type, ...item._source })));
      } catch (error) {
        console.info(error);
      }
    };

    allListArticle();
  }, [currentPage, query]);

  return (
    <AppContext.Provider
      value={{
        articles,
        setQuery,
        setInputChange,
        inputChange,
        currentPage,
        setCurrentPage,
        setArticles,
        favorites,
        favorited,
        setFavorited,
        totalPagesFavorites,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default HomeProvider;
