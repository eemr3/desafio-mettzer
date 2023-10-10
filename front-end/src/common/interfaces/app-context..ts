export interface IAppContext {
  articles: IArticles[];
  setArticles: (value: IArticles[]) => void;
  favorites: IFavorites[];
  setFavorites: (value: IFavorites[]) => void;
  favorited: boolean;
  setFavorited: (value: boolean) => void;
  query: string;
  setQuery: (value: string) => void;
  inputChange: string;
  setInputChange: (value: string) => void;
  data: IFavorites;
}

export interface IArticles {
  id: number;
  title: string;
  description: string;
  authors: string[];
  urls: string[];
  type: string;
}

export interface IFavorites {
  getAllFavorites: Favorites;
}

type Favorites = {
  favorites: DataFovorite[];
  totalItems: number;
};

type DataFovorite = {
  articleId: number;
  title: string;
  description: string;
  authors: string[];
  urls: string[];
  type: string;
  userId: string;
};
