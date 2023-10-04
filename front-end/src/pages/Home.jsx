import { useContext, useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';
import { getListArticle } from '../context/utils';

function Home() {
  const { articles, favorites, query, setArticles, setIsLoading } =
    useContext(AppContext);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    const allListArticle = async () => {
      setIsLoading(true);
      try {
        console.log(offset);
        const result = await getListArticle(query, offset);

        setArticles(result.map((item) => ({ _type: item._type, ...item._source })));
        if (result.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        console.info(error);
      }
    };

    allListArticle();
  }, [offset, query, setArticles, setIsLoading]);

  return (
    <>
      <SearchBar isRender={true} />
      <div className="h-[65%]">
        <Table articles={articles} favorites={favorites} />
      </div>
      <Pagination limit={10} total={100} offset={offset} setOffset={setOffset} />
    </>
  );
}

export default Home;
