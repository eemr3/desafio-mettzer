import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function SearchBar() {
  const { setQuery, inputChange, setInputChange } = useContext(AppContext);

  const handleSearch = () => {
    setQuery(inputChange);
  };

  return (
    <div className="w-full py-3  mb-2 items-center flex  bg-cyan-800">
      <div className="container">
        <input
          className="p-1 mr-1 rounded"
          type="text"
          name="search"
          value={inputChange}
          onChange={(e) => setInputChange(e.target.value)}
        />

        <button
          className="lg:ml-4 p-1 w-28 rounded bg-slate-100 text-zinc-900"
          type="button"
          onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
