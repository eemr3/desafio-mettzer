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
    setIsLoading,
  } = useContext(AppContext);
  const LIMIT = favorites ? favorites.length + 10 : null;

  useEffect(() => {
    const getFavorites = async () => {
      setIsLoading(true);
      try {
        const response = await requestGetAllFavorites(currentPage);
        setTotalPagesFavorites(response.length);
        console.info(response);
        setFavorites(response);
        if (response.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        console.info(error);
      }
    };

    getFavorites();
  }, [favorited, currentPage, setTotalPagesFavorites, setFavorites, setIsLoading]);

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
