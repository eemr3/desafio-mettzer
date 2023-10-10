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
  articleId: number;
  title: string;
  description: string;
  authors: string[];
  urls: string[];
  type: string;
  userId: string;
}
