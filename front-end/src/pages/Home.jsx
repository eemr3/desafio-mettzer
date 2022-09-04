import { useContext } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';

const PageSize = 10;
function Home() {
  const { currentPage, setCurrentPage, articles, favorites } = useContext(AppContext);

  return (
    <>
      <SearchBar isRender={true} />
      <Table articles={articles} favorites={favorites} />
      <Pagination
        currentPage={currentPage}
        totalCount={100}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default Home;
