import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCurrencyInput {
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

  @Field(() => Date, { description: 'Date of creation of the currency' })
  createdAt?: Date | string;

  @Field(() => Date, {
    description: 'Date of the last update',
    nullable: true,
  })
  updateAt?: Date | string;
}
