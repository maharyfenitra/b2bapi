import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OrderEntity {
  @Field()
  id?: string;

  @Field(() => String, { description: 'Client id' })
  clientId: string;

  @Field(() => String, { description: 'Provider id' })
  providerId: string;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field(() => String, { description: 'Order description' })
  description: string;

  @Field(() => Number)
  status: number;

  @Field(() => Date)
  createdAt?: Date | any;

  @Field(() => Date, { nullable: true })
  updateAt?: Date | any;
}
