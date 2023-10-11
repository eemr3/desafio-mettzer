import { useContext, useEffect, useState } from 'react';
import NavBar from '../../components/SearchBar';
import Table from '../../components/Table';
import { AppContext } from '../../context/AppContext';
import { getAllArticles } from '../../service/http';
import Pagination from '../../components/Pagination';

function HomePage() {
  const { setArticles, query, articles } = useContext(AppContext);
  const [isLoading, setIsloading] = useState(true);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    const getAllArticle = async () => {
      setIsloading(true);
      const { data } = await getAllArticles(query, offset);

      setArticles(
        data?.map((item: any) => {
          return {
            articleId: item._id,
            ...item._source,
            type: item._type,
          };
        }),
      );
      setIsloading(false);
    };
    getAllArticle();
  }, [offset, query, setArticles]);

  return (
    <div>
      <NavBar />
      <div className="h-[65%]">
        <Table isLoading={isLoading} articles={articles} />
      </div>
      <Pagination limit={10} total={100} offset={offset} setOffset={setOffset} />
    </div>
  );
}

export default HomePage;
