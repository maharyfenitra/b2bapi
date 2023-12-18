import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OrderEntity {
  @Field()
  id?: string;

  @Field()
  client_id: string;

  @Field()
  provider_id: string;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field(() => String, { description: 'Order description' })
  description: string;

  @Field(() => Number)
  status: number;

  @Field(() => Date)
  date: Date | any;
}
