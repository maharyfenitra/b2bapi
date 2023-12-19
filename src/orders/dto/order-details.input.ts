import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class OrderDetailsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String)
  itemId: string;

  @Field(() => String)
  label: string;

  @Field(() => Number)
  qty: number;

  @Field(() => Number)
  price: number;
}
