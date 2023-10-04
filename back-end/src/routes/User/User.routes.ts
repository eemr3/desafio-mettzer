import express from 'express';
import { createUserController } from '../../controllers/User.controller';

const router = express.Router();

router.post('/', createUserController);

export default router;
