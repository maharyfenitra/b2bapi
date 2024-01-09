import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSupplierInput {
  @Field(() => String, { description: 'Supplier contact fisrt name' })
  firstName: string;
  @Field(() => String, { description: 'Supplier contact last name' })
  lastName: string;
  @Field(() => String, { description: 'Supplier name' })
  name: string;
  @Field(() => String, { description: 'Supplier mail' })
  mail: string;
  @Field(() => String, { description: 'Supplier description' })
  description: string;
  @Field(() => String, { description: 'Supplier adress' })
  adress: string;
  @Field(() => String, { description: 'Supplier city' })
  city: string;
  @Field(() => String, { description: 'Supplier area' })
  area: string;
  @Field(() => String, { description: 'Supplier stat' })
  stat: string;
  @Field(() => String, { description: 'Supplier nif' })
  nif: string;
}
