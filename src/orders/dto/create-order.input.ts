import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  client_id: string;

  @Field(() => String)
  provider_id: string;

  @Field({ nullable: true })
  status: number;

  @Field(() => String, { description: 'Order reference' })
  reference: string;

  @Field()
  date: Date;
}
