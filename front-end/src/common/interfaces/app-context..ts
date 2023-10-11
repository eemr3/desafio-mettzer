export interface IAppContext {
  articles: IArticles[];
  setArticles: (value: IArticles[]) => void;
  favorites: DataFovorite[];
  setFavorites: (value: DataFovorite[]) => void;
  favorited: boolean;
  setFavorited: (value: boolean) => void;
  query: string;
  setQuery: (value: string) => void;
  inputChange: string;
  setInputChange: (value: string) => void;
  data: IFavorites;
  limit: number;
  setLimit: (value: number) => void;
}

export interface IArticles {
  articleId: number;
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

export interface DataFovorite {
  articleId: number;
  title: string;
  description: string;
  authors: string[];
  urls: string[];
  type: string;
  userId: string;
}
