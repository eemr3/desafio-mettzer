import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Favorite {
  @Field(() => ID)
  id?: string;

  @Field(() => Int)
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

@ObjectType()
export class GetAllFavorites {
  @Field(() => [Favorite])
  favorites: Favorite;

  @Field(() => Int)
  totalItems: number;
}
@InputType()
export class InputFavorite {
  @Field(() => Int)
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
