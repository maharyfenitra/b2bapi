import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class OrderDetailsInput {
  @Field(() => String)
  item_id: string;

  @Field(() => String)
  label: string;

  @Field(() => Number)
  qty: number;

  @Field(() => Number)
  price: number;
}
