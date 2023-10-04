const bcrypt = require('bcryptjs');
import { prisma } from '../database/prisma/prisma.service';
const errorBase = require('../utils/errorBase');

export const createUser = async (data: any) => {
  const { name, email, password } = data;
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) {
    throw errorBase(409, 'Usuário já cadastrado');
  }

  const newPwd = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      ...data,
      password: newPwd,
    },
  });

  return user;
};
