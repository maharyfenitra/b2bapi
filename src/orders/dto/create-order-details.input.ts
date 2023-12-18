import { InputType, Field } from '@nestjs/graphql';
import { OrderDetailsInput } from './order-details.input';

@InputType()
export class CreateOrderDetailsInput {
  @Field(() => String)
  orderId: string;

  @Field(() => [OrderDetailsInput])
  orderDetailsInput: OrderDetailsInput[];
}
