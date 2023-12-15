import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Accounting {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
