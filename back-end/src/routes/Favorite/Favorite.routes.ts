import express from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';

import {
  createFavorite,
  destroyFovorite,
  getAllFavorites,
} from '../../controllers/Favorite.controller';

const router = express.Router();

router.post('/', authMiddleware, createFavorite);
router.get('/', authMiddleware, getAllFavorites);
router.delete('/:id', authMiddleware, destroyFovorite);

export default router;
