import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeliveryDetailsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { description: 'item id' })
  itemId: string;

  @Field(() => String, { description: 'label of item' })
  label: string;

  @Field(() => Number, { description: 'Quantity of item to buy' })
  qty: number;

  @Field(() => Number, { description: 'price of item' })
  price: number;

  @Field(() => Number, { nullable: true })
  status?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | any;

  @Field(() => Date, { nullable: true })
  updateAt?: Date | any;
}
