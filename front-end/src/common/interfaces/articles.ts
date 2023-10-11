export interface IArticle {
  articleId: number;
  title: string;
  description: string;
  type: string;
  authors: string[];
  urls: string[];
}

export interface IFavorites {
  getAllFavorites: Favorites[];
}

type Favorites = {
  articleId: number;
  title: string;
  description: string;
  authors: string[];
  urls: string[];
  type: string;
  userId: string;
};
