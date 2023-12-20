import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ItemEntity {
  @Field(() => String, { description: 'Item id' })
  id?: string;

  @Field(() => String, { description: 'Item label' })
  label: string;

  @Field(() => String, { description: 'Item description' })
  description: string;

  @Field(() => String, { description: 'id of the user who created the item' })
  userId: string;

  @Field(() => Int)
  status: number;

  @Field(() => Date, { description: 'Date of creation of the item' })
  createdAt?: Date | string;

  @Field(() => Date, {
    description: 'Date of the last update',
    nullable: true,
  })
  updateAt?: Date | string;
}
