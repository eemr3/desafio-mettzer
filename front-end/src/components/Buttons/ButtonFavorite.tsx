import { useContext, useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { IButtonFavorite } from '../../common/interfaces/button-favorite';
import { AppContext } from '../../context/AppContext';
import { useApolloClient, useMutation } from '@apollo/client';
import { CREATE_FAVORITE, REMOVE_FAVORITE } from '../../lib/mutation';
import { GET_FAVORITES } from '../../lib/query';

export default function ButtonFavorite({ favData, checked }: IButtonFavorite) {
  const apolloClient = useApolloClient();
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);
  const [createFavorite] = useMutation(CREATE_FAVORITE);
  const { articles, data, favorited, setFavorited } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(checked);

  const handleSaveFavorite = async () => {
    const result = articles.find((item: any) => Number(item.id) === Number(favData));
    const data = {
      articleId: Number(result?.articleId),
      authors: result?.authors,
      type: result?.type,
      title: result?.title,
      description: result?.description,
      urls: result?.urls,
    };

    try {
      const client = await createFavorite({
        variables: {
          data: {
            ...data,
          },
        },
        refetchQueries: [GET_FAVORITES],
      });

      // const existingData = apolloClient.readQuery({
      //   query: GET_FAVORITES,
      //   variables: {
      //     limit: 0,
      //   },
      // });
      // console.log(existingData);

      setIsFavorite(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfavorite = async () => {
    const result = data.getAllFavorites.favorites.find(
      (item: any) => item.articleId === +favData,
    );

    if (!result) return null;
    try {
      await removeFavorite({
        variables: {
          id: result?.articleId,
        },
        refetchQueries: [GET_FAVORITES],
      });
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
