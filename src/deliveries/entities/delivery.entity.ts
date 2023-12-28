import { ObjectType, Field } from '@nestjs/graphql';
import { DeliveryDetailsEntity } from './delivery-details.entity';

@ObjectType()
export class DeliveryEntity {
  @Field(() => String, { description: 'Client id' })
  customerId: string;

  @Field(() => String, { description: 'Provider Id' })
  providerId: string;

  @Field(() => String, { description: 'Reference of the delivery' })
  reference: string;

  @Field(() => String, { description: 'Delivery description' })
  description: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  deliveryDetails: DeliveryDetailsEntity[];

  @Field(() => String, { description: 'Adress delivery' })
  adressDelivery: string;

  @Field(() => String, { description: 'Country delivery' })
  countryDelivery: string;

  @Field(() => Number, {
    description: 'Status of the delivery',
    nullable: true,
  })
  status?: number;
}
