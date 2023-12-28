import { InputType, Field } from '@nestjs/graphql';
import { DeliveryDetailsInput } from './delivery-details.input';

@InputType()
export class CreateDeliveryInput {
  @Field(() => String, { description: 'Client id' })
  customerId: string;

  @Field(() => String, { description: 'Provider Id' })
  providerId: string;

  @Field(() => String, { description: 'Reference of the delivery' })
  reference: string;

  @Field(() => String, { description: 'Delivery description' })
  description: string;

  @Field(() => [DeliveryDetailsInput], {
    description: 'Details of Item to deliver',
  })
  deliveryDetails: DeliveryDetailsInput[];

  @Field(() => String, { description: 'Adress delivery' })
  adressDelivery: string;

  @Field(() => String, { description: 'Country delivery' })
  countryDelivery: string;
}
