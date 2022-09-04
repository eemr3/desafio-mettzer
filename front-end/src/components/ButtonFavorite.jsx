import { useState } from 'react';
import { useContext } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { AppContext } from '../context/AppContext';
import { requestDeleteFavorite, requestSaveFavorite } from '../context/utils';

export default function ButtonFavorite({ favData, checked }) {
  const { articles, favorites, favorited, setFavorited } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(checked);

  const handleSaveFavorite = async () => {
    const result = articles.find((item) => Number(item.id) === Number(favData));
    const data = {
      idArticle: result.id,
      authors: result.authors,
      _type: result._type,
      title: result.title,
      description: result.description,
      urls: result.urls,
    };

    try {
      await requestSaveFavorite(data);
      setIsFavorite(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfavorite = async () => {
    const result = favorites.find((item) => item.id === Number(favData));
    console.info(result);
    try {
      await requestDeleteFavorite(result.idFav);
      setIsFavorite(false);
      setFavorited(!favorited);
    } catch (error) {
      console.info(error);
    }
  };

  return isFavorite ? (
    <p className="text-center">
      <IoHeartSharp
        className="cursor-pointer"
        color="rgb(220 38 38)"
        size="2rem"
        onClick={handleUnfavorite}
      />
    </p>
  ) : (
    <p className="text-center">
      <IoHeartOutline
        size="2rem"
        className="cursor-pointer"
        onClick={handleSaveFavorite}
      />
    </p>
  );
}
