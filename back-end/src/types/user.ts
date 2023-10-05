import { Request } from 'express';
import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID!)
  id: string;

  @Field()
  fullName: string;

  @Field()
  email: string;
}

@ObjectType()
export class TokenJwt {
  @Field()
  access_token: string;
}

@InputType()
export class InputUser {
  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class InputLogin {
  @Field()
  email: string;

  @Field()
  password: string;
}

type Payload = {
  id: string;
  fullName: string;
  email: string;
  iat: number;
  exp: number;
};

export interface RequestWithUser extends Request {
  user?: Payload;
}
export interface IUser {
  req: RequestWithUser;
}
