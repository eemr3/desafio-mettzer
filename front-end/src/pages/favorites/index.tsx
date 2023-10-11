import { useContext } from 'react';
import Pagination from '../../components/Pagination';
import NavBar from '../../components/SearchBar';
import Table from '../../components/Table';
import { AppContext } from '../../context/AppContext';

export default function Favorites() {
  const { data, limit, setLimit } = useContext(AppContext);

  return (
    <>
      <NavBar />;
      <div>
        <Table isLoading articles={data?.getAllFavorites?.favorites} />
      </div>
      <Pagination
        limit={10}
        offset={limit}
        setOffset={setLimit}
        total={data?.getAllFavorites.totalItems}
      />
    </>
  );
}
