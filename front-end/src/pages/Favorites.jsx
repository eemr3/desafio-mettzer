import { useContext } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';
// import { requestGetAllFavorites } from '../context/utils';

const PageSize = 10;
function Favorites() {
  const { currentPage, setCurrentPage, favorites } = useContext(AppContext);
  const LIMIT = favorites.length + 10;

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
