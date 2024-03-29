import { Arg, Authorized, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

import { IUser, ReqUser } from '../types/user';
import { FavoriteService } from '../services/favorite.service';
import { Favorite, GetAllFavorites, InputFavorite } from '../types/favorite';
import { type } from 'os';

@Resolver()
export class FavoriteResolver {
  constructor(private favoriteService: FavoriteService) {
    this.favoriteService = new FavoriteService();
  }
  @Authorized()
  @Mutation(() => Favorite)
  async createFavorite(@Arg('data') data: InputFavorite, @Ctx() ctx: ReqUser) {
    const id = ctx.req?.user?.id;
    const favorite = await this.favoriteService.createFavoriteService({
      ...data,
      userId: id,
    });

    return favorite;
  }

  @Authorized()
  @Query(() => GetAllFavorites)
  async getAllFavorites(@Arg('limit', (type) => Int) limit: number) {
    const favorites = await this.favoriteService.getAllFavoritesService(limit);

    return favorites;
  }

  @Authorized()
  @Mutation(() => Favorite)
  async removeFavorite(@Arg('id', (type) => Int) id: number): Promise<Favorite> {
    const result = await this.favoriteService.destroyFovoriteService(id);

    return result;
  }
}
