import React, { useState } from 'react';
import { useContext } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { AppContext } from '../context/AppContext';
import { requestSaveFavorite } from '../context/utils';

export default function ButtonFavorite(favId) {
  const { articles } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSaveFavorite = async () => {
    const result = articles.find(
      (item) => Number(item._source.id) === Number(favId.favData),
    );
    const data = {
      idArticle: result._source.id,
      authors: result._source.authors,
      type: result._type,
      title: result._source.title,
      description: result._source.description,
      urls: result._source.urls,
    };

    await requestSaveFavorite(data);
    setIsFavorite(!isFavorite);
  };

  return isFavorite ? (
    <p className="text-center">
      <IoHeartSharp
        className="cursor-pointer"
        color="rgb(220 38 38)"
        size="2rem"
        onClick={() => {}}
      />
    </p>
  ) : (
    <p className="text-center">
      <IoHeartOutline
        size="2rem"
        className="cursor-pointer"
        onClick={() => handleSaveFavorite()}
      />
    </p>
  );
}
