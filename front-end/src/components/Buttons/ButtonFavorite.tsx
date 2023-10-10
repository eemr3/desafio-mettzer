import { useContext, useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { IButtonFavorite } from '../../common/interfaces/button-favorite';
import { AppContext } from '../../context/AppContext';
import { useMutation } from '@apollo/client';
import { CREATE_FAVORITE, REMOVE_FAVORITE } from '../../lib/mutation';

// import { requestDeleteFavorite, requestSaveFavorite } from '../context/utils';

export default function ButtonFavorite({ favData, checked }: IButtonFavorite) {
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);
  const [createFavorite] = useMutation(CREATE_FAVORITE);
  const { articles, favorites, favorited, setFavorited } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(checked);

  const handleSaveFavorite = async () => {
    const result = articles.find((item: any) => Number(item.id) === Number(favData));

    const data = {
      articleId: Number(result?.id),
      authors: result?.authors,
      type: result?.type,
      title: result?.title,
      description: result?.description,
      urls: result?.urls,
    };

    try {
      await createFavorite({
        variables: {
          data: {
            ...data,
          },
        },
      });

      setIsFavorite(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfavorite = async () => {
    const result = favorites.find((item: any) => item.articleId === +favData);

    try {
      // await requestDeleteFavorite(result.articleId);
      setIsFavorite(!isFavorite);
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
