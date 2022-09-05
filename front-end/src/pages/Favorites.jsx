import { useContext, useEffect } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';
import { requestGetAllFavorites } from '../context/utils';

const PageSize = 10;
function Favorites() {
  const {
    favorited,
    currentPage,
    setCurrentPage,
    favorites,
    setTotalPagesFavorites,
    setFavorites,
  } = useContext(AppContext);
  const LIMIT = favorites.length + 10;

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await requestGetAllFavorites(currentPage);
        setTotalPagesFavorites(response.length);
        console.info(response);
        setFavorites(response);
      } catch (error) {
        console.info(error);
      }
    };

    getFavorites();
  }, [favorited, currentPage, setTotalPagesFavorites, setFavorites]);

  return (
    <>
      <SearchBar isRender={false} />
      <Table articles={favorites} favorites={favorites} />
      <Pagination
        currentPage={currentPage}
        totalCount={LIMIT}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default Favorites;
