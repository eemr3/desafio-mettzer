export interface IArticle {
  id: number;
  title: string;
  description: string;
  type: string;
  authors: string[];
  urls: string[];
}

export interface IFavorite {
  id: number;
  title: string;
  description: string;
  type: string;
  authors: string[];
  urls: string[];
  userId: string;
}
