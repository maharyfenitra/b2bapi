import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => String, {
    description: 'Supplier contact fisrt name',
    nullable: true,
  })
  id?: string;
  @Field(() => String, {
    description: 'Supplier contact fisrt name',
    nullable: true,
  })
  firstName: string;
  @Field(() => String, {
    description: 'Supplier contact last name',
    nullable: true,
  })
  lastName: string;
  @Field(() => String, { description: 'Supplier name', nullable: true })
  name: string;
  @Field(() => String, { description: 'Supplier mail', nullable: true })
  mail: string;
  @Field(() => String, { description: 'Company number', nullable: true })
  phoneNumber: string;
  @Field(() => String, { description: 'Supplier description', nullable: true })
  description: string;
  @Field(() => String, { description: 'Supplier adress', nullable: true })
  adress: string;
  @Field(() => String, { description: 'Supplier city', nullable: true })
  city: string;
  @Field(() => String, { description: 'Supplier area', nullable: true })
  area: string;
  @Field(() => String, { description: 'Supplier stat', nullable: true })
  stat: string;
  @Field(() => String, { description: 'Supplier nif', nullable: true })
  nif: string;
  @Field(() => String, { description: 'Contact Mail', nullable: true })
  contactMail: string;
  @Field(() => String, { description: 'Contact Phone Number', nullable: true })
  contactPhoneNumber: string;
  @Field(() => String, { description: 'Contact Post', nullable: true })
  contactPost: string;
}
