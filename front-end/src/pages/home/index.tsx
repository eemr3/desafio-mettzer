import { useEffect, useState } from 'react';
import NavBar from '../../components/SearchBar';
import Table from '../../components/Table';
import { api } from '../../service/api';

function HomePage() {
  const [isLoading, setIsloading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAllArticle = async () => {
      setIsloading(true);
      const result = await api.get(
        `/search/água?1&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_APIKEY_CORE}`,
      );

      setArticles(
        result.data?.data.map((item: any) => {
          return {
            id: item._id,
            ...item._source,
            type: item._type,
          };
        }),
      );
      setIsloading(false);
    };
    getAllArticle();
  }, []);

  return (
    <div>
      <NavBar />
      <Table articles={articles} favorites={[]} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
