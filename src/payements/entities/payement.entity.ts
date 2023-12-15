import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Payement {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
