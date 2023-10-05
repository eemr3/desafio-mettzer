import { Arg, Mutation, Resolver } from 'type-graphql';
import { SignInService } from '../services/sign-in.service';
import { InputLogin, TokenJwt } from '../types/user';

@Resolver()
export class AuthResolver {
  constructor(private signinService: SignInService) {
    this.signinService = new SignInService();
  }

  @Mutation(() => TokenJwt)
  async login(@Arg('data') data: InputLogin) {
    const token = await this.signinService.serviceSignIn(data);
    return token;
  }
}
