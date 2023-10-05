import jwt from 'jsonwebtoken';

interface IData {
  id: string;
  fullName: string;
  email: string;
}
const SECRETE_KEY =
  process.env.JWT_SECRETE || 'qualquerstringpodesercolocadaaquidentrodessasaspas:)';
export const generateToken = async (data: IData) => {
  const token = jwt.sign(data, SECRETE_KEY, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

  return token;
};

export const decodedToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRETE_KEY);

    return decoded;
  } catch (error) {
    return false;
  }
};
