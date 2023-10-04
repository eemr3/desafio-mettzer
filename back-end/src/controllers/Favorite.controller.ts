import { Request, Response } from 'express';
import { RequestWithUser } from '../middlewares/authMiddleware';
import {
  createFavoriteService,
  getAllFavoritesService,
  destroyFovoriteService,
} from '../services/Favorite.service';

export const createFavorite = async (req: RequestWithUser, res: Response) => {
  const id = req.user?.id;

  try {
    const favorite = await createFavoriteService({ ...req.body, userId: id });

    return res.status(201).json(favorite);
  } catch (error) {
    console.log(error);
  }
};

export const getAllFavorites = async (req: Request, res: Response) => {
  const { page, limit } = req.query;
  const favorites = await getAllFavoritesService(Number(limit));

  return res.status(200).json(favorites);
};

export const destroyFovorite = async (req: Request, res: Response) => {
  try {
    await destroyFovoriteService(+req.params.id);
    return res.status(200).json({ message: 'Desfavoritado com sucesso' });
  } catch (err) {
    const error = err as Error;
    return res.status(404).json({ message: error.message });
  }
};
