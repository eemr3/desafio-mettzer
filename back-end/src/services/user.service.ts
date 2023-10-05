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
    console.log(user);
    return user;
  }

  async getAllUsers() {
    return await prisma.user.findMany();
  }
}
