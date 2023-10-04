import { Request, Response } from 'express';
import { serviceSignIn } from '../services/SignIn.service';

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await serviceSignIn(email, password);

    return res.status(200).json(token);
  } catch (err) {
    const error = err as Error;

    return res.status(401).json({ message: error.message });
  }
};
