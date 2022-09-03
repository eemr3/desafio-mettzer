import React, { useContext } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';

const LIMIT = 10;
function Home() {
  const { offset, setOffset } = useContext(AppContext);
  return (
    <>
      <SearchBar />
      <Table />
      <Pagination offset={offset} limit={LIMIT} total={100} setOffset={setOffset} />
    </>
  );
}

export default Home;
