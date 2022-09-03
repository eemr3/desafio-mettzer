import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';

function Home() {
  const { offset, setOffset } = useContext(AppContext);
  return (
    <>
      <SearchBar />
      <Table />
      {/* <Pagination offset={offset} limit={LIMIT} total={100} setOffset={setOffset} /> */}
    </>
  );
}

export default Home;
