import { CreateAccountingInput } from './create-accounting.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAccountingInput extends PartialType(CreateAccountingInput) {
  @Field(() => Int)
  id: number;
}
