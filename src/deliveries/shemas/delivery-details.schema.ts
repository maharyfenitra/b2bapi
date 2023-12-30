import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type delivryDetailDocument = HydratedDocument<DeliveryDetails>;

@Schema({ timestamps: true })
export class DeliveryDetails {
  @Prop({ required: true })
  itemId: string;

  @Prop({ type: String, required: true })
  label: string;

  @Prop({ type: Number, required: true })
  qty: number;

  @Prop({ type: Number, require: true })
  price: number;

  @Prop({ default: 1 })
  status: number;
}

export const DeliveryDetailsSchema =
  SchemaFactory.createForClass(DeliveryDetails);
