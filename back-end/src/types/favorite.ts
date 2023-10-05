import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class Favorite {
  @Field()
  id?: string;

  @Field()
  articleId: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  authors: string[];

  @Field(() => [String])
  urls: string[];

  @Field()
  type: string;

  @Field()
  createdAt: Date;
}

@InputType()
export class InputFavorite {
  @Field()
  articleId: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  authors: string[];

  @Field(() => [String])
  urls: string[];

  @Field()
  type: string;
}
