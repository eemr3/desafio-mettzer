export interface IAppContext {
  articles: iArticles[];
  setArticles: (value: iArticles[]) => void;
  favorites: IFavorites[];
  setFavorites: (value: IFavorites[]) => void;
  favorited: boolean;
  setFavorited: (value: boolean) => void;
  query: string;
  setQuery: (value: string) => void;
  inputChange: string;
  setInputChange: (value: string) => void;
}

export interface iArticles {
  id: number;
  title: string;
  description: string;
  authors: string[];
  urls: string[];
  _type: string;
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
