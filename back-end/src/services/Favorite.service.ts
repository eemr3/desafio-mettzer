import { prisma } from '../database/prisma/prisma.service';

export const createFavoriteService = async (data: any) => {
  const favorite = await prisma.favorite.create({
    data: {
      ...data,
      articleId: Number(data.articleId),
    },
  });
  return favorite;
};

export const getAllFavoritesService = async (limit: number) => {
  const totalItems = await prisma.favorite.count();

  const PAGE_SIZE = 10;
  const skip = limit ? (limit - 1) * PAGE_SIZE : 0;

  const favorites = await prisma.favorite.findMany({
    select: {
      articleId: true,
      authors: true,
      description: true,
      title: true,
      type: true,
      urls: true,
    },
    skip,
    take: limit ? PAGE_SIZE : 100,
    orderBy: { createdAt: 'asc' },
  });

  return {
    totalItems,
    favorites,
  };
};

export const destroyFovoriteService = async (id: number) => {
  const existFavorite = await prisma.favorite.findFirst({ where: { articleId: +id } });

  if (!existFavorite) {
    throw new Error('Favorito não encontrado');
  }

  await prisma.favorite.delete({ where: { id: existFavorite.id } });
};
