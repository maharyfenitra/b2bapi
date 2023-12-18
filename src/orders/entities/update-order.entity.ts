import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OrderEntity {
  @Field()
  id: string;

  @Field()
  clientId: string;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field(() => Number)
  status: number;

  @Field()
  date: Date;
}
