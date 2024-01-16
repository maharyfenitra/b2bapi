import { InputType, Field } from '@nestjs/graphql';
import { OrderDetailsInput } from './order-details.input';

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  providerId: string;

  @Field({ nullable: true })
  status: number;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field(() => String, { description: 'Order description' })
  description?: string;

  @Field(() => [OrderDetailsInput])
  orderDetailsInput: OrderDetailsInput[];

  @Field(() => Date, { nullable: true })
  createdDate?: Date;
}
