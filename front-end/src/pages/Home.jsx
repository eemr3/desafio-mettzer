import { useContext, useEffect } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { AppContext } from '../context/AppContext';
import { getListArticle } from '../context/utils';

const PageSize = 10;
function Home() {
  const {
    currentPage,
    setCurrentPage,
    articles,
    favorites,
    query,
    setArticles,
    setIsLoading,
  } = useContext(AppContext);

  useEffect(() => {
    const allListArticle = async () => {
      setIsLoading(true);
      try {
        const result = await getListArticle(query, currentPage);

        setArticles(result.map((item) => ({ _type: item._type, ...item._source })));
        if (result.length > 0) {
          setIsLoading(false);
        }
      } catch (error) {
        console.info(error);
      }
    };

    allListArticle();
  }, [currentPage, query, setArticles, setIsLoading]);

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
