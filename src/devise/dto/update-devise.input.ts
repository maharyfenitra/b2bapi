import { CreateDeviseInput } from './create-devise.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDeviseInput extends PartialType(CreateDeviseInput) {
  @Field(() => Int)
  id: number;
}
