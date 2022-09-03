import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AppContext } from './AppContext';
import { getListArticle } from './utils';

const KEY = process.env.REACT_APP_APIKEY_CORE;

function HomeProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('Água');
  const [inputChange, setInputChange] = useState('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const allListArticle = async () => {
      const result = await getListArticle(query, offset, KEY);

      setArticles(result);
    };
    allListArticle();
  }, [offset, query]);

  return (
    <AppContext.Provider
      value={{
        articles,
        setQuery,
        setInputChange,
        inputChange,
        offset,
        setOffset,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default HomeProvider;
