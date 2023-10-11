const bcrypt = require('bcryptjs');
import { prisma } from '../database/prisma/prisma.service';

export class UserService {
  async createUser(data: any) {
    const userExists = await prisma.user.findUnique({ where: { email: data.email } });
    if (userExists) {
      throw new Error('Usuário já cadastrado');
    }

    const newPwd = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        ...data,
        password: newPwd,
      },
    });

    return user;
  }

  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async getUser(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}
