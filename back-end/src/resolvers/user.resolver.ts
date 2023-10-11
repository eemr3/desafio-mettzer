import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { IUser, InputUser, ReqUser, User } from '../types/user';
import { UserService } from '../services/user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: InputUser): Promise<IUser> {
    const user = await this.userService.createUser(data);
    return user;
  }

  @Authorized()
  @Query(() => User)
  async user(@Ctx() ctx: ReqUser): Promise<IUser> {
    const id = ctx.req?.user?.id || '';
    return await this.userService.getUser(id);
  }
}
