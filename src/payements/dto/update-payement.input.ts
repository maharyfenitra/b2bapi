import { CreatePayementInput } from './create-payement.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePayementInput extends PartialType(CreatePayementInput) {
  @Field(() => Int)
  id: number;
}
