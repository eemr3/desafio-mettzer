import { NextFunction, Request, Response } from 'express';
import { decodedToken } from '../auth/authToken';
import { JwtPayload } from 'jsonwebtoken';

type Payload = {
  id: string;
  fullName: string;
  email: string;
  iat: number;
  exp: number;
};

export interface RequestWithUser extends Request {
  user?: Payload;
}

export const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ message: 'Não existe um token!' });
  }

  const decoded = await decodedToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Usuário não autorizado!' });
  }

  req.user = decoded as Payload;

  next();
};
