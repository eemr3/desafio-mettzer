import { generateToken } from '../auth/authToken';
import { prisma } from '../database/prisma/prisma.service';

import bcrypt from 'bcryptjs';

export class SignInService {
  async serviceSignIn(data: { email: string; password: string }) {
    const isSignIn = await prisma.user.findUnique({ where: { email: data.email } });

    if (!isSignIn) {
      throw new Error('Email ou senha inválidos!');
    }

    const pwdIsValid = await bcrypt.compare(data.password, isSignIn.password);
    if (!pwdIsValid) {
      throw Error('Email ou senha inválidos!');
    }

    const token = await generateToken({
      id: isSignIn.id,
      fullName: isSignIn.fullName,
      email: isSignIn.email,
    });

    return {
      access_token: token,
    };
  }
}
