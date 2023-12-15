import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccountingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
