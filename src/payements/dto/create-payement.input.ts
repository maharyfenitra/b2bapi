import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePayementInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
