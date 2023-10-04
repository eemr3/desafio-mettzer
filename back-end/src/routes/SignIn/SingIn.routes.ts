import express from 'express';
import { signIn } from '../../controllers/SignIn.controller';

const router = express.Router();

router.post('/', signIn);

export default router;
