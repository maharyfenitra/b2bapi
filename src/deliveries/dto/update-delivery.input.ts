import { CreateDeliveryInput } from './create-delivery.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { DeliveryDetailsInput } from './delivery-details.input';

@InputType()
export class UpdateDeliveryInput extends PartialType(CreateDeliveryInput) {
  @Field(() => String, { description: 'id' })
  id?: string;

  @Field(() => String, { description: 'Client id' })
  customerId?: string;

  @Field(() => String, { description: 'Provider Id' })
  providerId?: string;

  @Field(() => String, { description: 'Reference of the delivery' })
  reference?: string;

  @Field(() => String, { description: 'Delivery description' })
  description?: string;

  @Field(() => Int, { description: 'Status' })
  status?: number;

  @Field(() => [DeliveryDetailsInput], {
    description: 'Example field (placeholder)',
  })
  deliveryDetails?: DeliveryDetailsInput[];

  @Field(() => String, { description: 'Adress delivery' })
  adressDelivery?: string;

  @Field(() => String, { description: 'Country delivery' })
  countryDelivery?: string;
}
