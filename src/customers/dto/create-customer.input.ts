import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => String, { description: 'Customer contact fisrt name' })
  firstName: string;
  @Field(() => String, { description: 'Customer contact last name' })
  lastName: string;
  @Field(() => String, { description: 'Customer name' })
  name: string;
  @Field(() => String, { description: 'Customer mail' })
  mail: string;
  @Field(() => String, { description: 'Customer description' })
  description: string;
  @Field(() => String, { description: 'Customer adress' })
  adress: string;
  @Field(() => String, { description: 'Customer city' })
  city: string;
  @Field(() => String, { description: 'Customer area' })
  area: string;
  @Field(() => String, { description: 'Customer stat' })
  stat: string;
  @Field(() => String, { description: 'Customer nif' })
  nif: string;
}
