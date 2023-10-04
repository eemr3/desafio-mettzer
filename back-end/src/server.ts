import express, { Request, Response } from 'express';
import cors from 'cors';
import { prisma } from './database/prisma/prisma.service';
import Userroutes from './routes/User/User.routes';
import LoginRoutes from './routes/SignIn/SingIn.routes';
import FavoriteRoutes from './routes/Favorite/Favorite.routes';

const PORT = 4000;
const app = express();

async function main() {
  app.use(express.json());
  app.use(cors());
  app.use('/users', Userroutes);
  app.use('/login', LoginRoutes);

  app.use('/favorites', FavoriteRoutes);

  app.get('/users/:id', async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      include: {
        Favorite: true,
      },
    });
    return res.status(200).json(user);
  });
  app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
