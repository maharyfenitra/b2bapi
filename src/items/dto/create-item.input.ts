import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field(() => String, { description: 'Item code' })
  code: string;

  @Field(() => String, { description: 'Item label' })
  label: string;

  @Field(() => String, { description: 'Item description' })
  description: string;

  @Field(() => Float, { description: 'Item price' })
  price: number;

  @Field(() => String, { description: 'id of the user who created the item' })
  userId: string;
}
