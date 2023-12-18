import { InputType, Int, Field } from '@nestjs/graphql';
import { OrderDetailsInput } from './order-details.input';

@InputType()
export class CreateOrderDetailsInput {

  @Field(() => String)
  order_id: string;

  @Field(() => [OrderDetailsInput])
  orderDetailsInput: OrderDetailsInput[];

 
}