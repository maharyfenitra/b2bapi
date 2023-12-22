import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CurrencyEntity {
  @Field(() => String, { description: 'Item id' })
  id?: string;

  @Field(() => String, { description: 'Currency label' })
  symbol: string;

  @Field(() => String, { description: 'Iso Code' })
  isoCode: string;

  @Field(() => String, { description: 'Currency label' })
  label: string;

  @Field(() => String, { description: 'Currency description' })
  description: string;

  @Field(() => String, {
    description: 'id of the user who created the currency',
  })
  userId: string;
}
