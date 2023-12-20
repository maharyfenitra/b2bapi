import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field(() => String, { description: 'Item label' })
  label: string;

  @Field(() => String, { description: 'Item description' })
  description: string;

  @Field(() => String, { description: 'id of the user who created the item' })
  userId: string;
}
