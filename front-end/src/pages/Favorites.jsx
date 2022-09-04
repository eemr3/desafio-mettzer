import { useContext } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';

const PageSize = 10;
function Favorites() {
  const { currentPage, setCurrentPage, favorites } = useContext(AppContext);

  return (
    <>
      <SearchBar isRender={false} />
      <Table articles={favorites} favorites={favorites} />
      <Pagination
        currentPage={currentPage}
        totalCount={favorites.length + 10}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default Favorites;
