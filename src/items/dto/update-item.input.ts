import { CreateItemInput } from './create-item.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Item label' })
  label?: string;

  @Field(() => String, { description: 'Item description', nullable: true })
  description?: string;
}
