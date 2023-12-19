import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  clientId: string;

  @Field(() => String)
  providerId: string;

  @Field({ nullable: true })
  status: number;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field(() => String, { description: 'Order description' })
  description?: string;

  @Field(() => Date, { nullable: true })
  createdDate?: Date;
}
