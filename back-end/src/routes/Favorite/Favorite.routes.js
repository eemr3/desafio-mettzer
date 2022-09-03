const express = require('express');
const Contrller = require('../../controllers/Favorite.controller');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, Contrller.createFavorite);
router.get('/', authMiddleware, Contrller.getAllFavorites);
router.delete('/:id', authMiddleware, Contrller.destroyFovorite);

module.exports = router;
