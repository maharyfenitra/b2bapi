import { CreateTraductionInput } from './create-traduction.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTraductionInput extends PartialType(CreateTraductionInput) {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int)
  status: number;
}
