import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DeliveryDetails } from './delivery-details.schema';

export type DeliveryDocument = HydratedDocument<Delivery>;

@Schema({ timestamps: true })
export class Delivery {
  @Prop({ type: String })
  customerId: string;

  @Prop()
  providerId: string;

  @Prop({ type: String, required: true })
  reference: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ type: String, default: '' })
  adressDelivery: string;

  @Prop({ type: String, default: '' })
  countryDelivery: string;

  @Prop({ required: true })
  deliveryDetails: DeliveryDetails[];

  @Prop({ default: 1 })
  status: number;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
