import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTraductionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
