import { ObjectType, Field } from '@nestjs/graphql';
import { OrderDetailsEntity } from './order-details.entity';

@ObjectType()
export class OrderEntity {
  @Field(() => String, { description: 'Order Id', nullable: true })
  id?: string;

  @Field(() => String, { description: 'Provider id' })
  supplierId: string;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field(() => String, { description: 'Order description' })
  description: string;

  @Field(() => [OrderDetailsEntity], {
    description: 'order details',
    nullable: true,
  })
  orderDetailsEntity?: OrderDetailsEntity[];

  @Field(() => Number)
  status: number;

  @Field(() => Date)
  createdAt?: Date | any;

  @Field(() => Date, { nullable: true })
  updateAt?: Date | any;
}
