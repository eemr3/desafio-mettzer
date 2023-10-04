import React, { useContext, useEffect, useState } from 'react';
import Pagination from '../components/Pagination'; // Importe o componente de paginação
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';
import { requestGetAllFavorites } from '../context/utils';

function Favorites() {
  const { favorited, setTotalPagesFavorites, favorites, setFavorites, setIsLoading } =
    useContext(AppContext);
  const [offset, setOffset] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const getFavorites = async () => {
      setIsLoading(true);
      try {
        const page = Math.floor(offset / 10) === 0 ? 1 : Math.floor(offset / 10 + 1);

        const response = await requestGetAllFavorites(page);
        setTotalItems(response.totalItems);

        setFavorites(response.items);
        if (response.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        console.info(error);
      }
    };

    getFavorites();
  }, [favorited, offset, setTotalPagesFavorites, setFavorites, setIsLoading]);

  return (
    <>
      <SearchBar isRender={false} />
      <div className="h-[65%]">
        <Table articles={favorites} favorites={favorites} />
      </div>
      <Pagination
        limit={10}
        total={totalItems && totalItems}
        offset={offset}
        setOffset={setOffset}
      />
    </>
  );
}

export default Favorites;
