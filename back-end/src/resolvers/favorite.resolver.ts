import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';

import { IUser } from '../types/user';
import { FavoriteService } from '../services/favorite.service';
import { Favorite, InputFavorite } from '../types/favorite';

@Resolver()
export class FavoriteResolver {
  constructor(private favoriteService: FavoriteService) {
    this.favoriteService = new FavoriteService();
  }
  @Authorized()
  @Mutation(() => Favorite)
  async createFavorite(@Arg('data') data: InputFavorite, @Ctx() ctx: IUser) {
    const id = ctx.req?.user?.id;
    const favorite = await this.favoriteService.createFavoriteService({
      ...data,
      userId: id,
    });

    return 'Teste';
  }
}
