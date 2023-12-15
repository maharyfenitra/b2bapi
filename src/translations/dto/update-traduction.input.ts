import { CreateTraductionInput } from './create-traduction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTraductionInput extends PartialType(CreateTraductionInput) {
  @Field(() => Int)
  id: number;
}
