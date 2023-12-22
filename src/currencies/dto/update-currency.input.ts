import { CreateCurrencyInput } from './create-currency.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCurrencyInput extends PartialType(CreateCurrencyInput) {
  @Field(() => String, { description: 'Item id' })
  id: string;

  @Field(() => String, { description: 'Currency label' })
  symbol?: string;

  @Field(() => String, { description: 'Iso Code' })
  isoCode?: string;

  @Field(() => String, { description: 'Currency label' })
  label?: string;

  @Field(() => String, { description: 'Currency description' })
  description?: string;
}
