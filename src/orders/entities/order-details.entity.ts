import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OrderDetailsEntity {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String)
  item_id: string;

  @Field(() => String)
  label: string;

  @Field(() => Number)
  qty: number;

  @Field(() => Number)
  price: number;
}
