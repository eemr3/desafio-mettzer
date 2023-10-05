import { Request, Response } from 'express';
import { createUser } from '../services/user.service';

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);

    return res.status(201).json(user);
  } catch (err) {
    const error = err as Error;

    return res.status(409).json({ message: error.message });
  }
};
export { createUserController };
