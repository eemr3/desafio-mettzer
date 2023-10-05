import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { InputUser, User } from '../types/user';
import { UserService } from '../services/user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: InputUser): Promise<User> {
    const user = await this.userService.createUser(data);
    return user;
  }

  @Authorized()
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }
}
