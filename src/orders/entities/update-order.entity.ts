import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderEntity {
  @Field()
  id: string;

  @Field()
  client_id: string;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field(() => Number)
  status: number;

  @Field()
  date: Date;
}
