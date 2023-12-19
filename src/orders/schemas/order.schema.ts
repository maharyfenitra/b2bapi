import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: String })
  clientId: string;

  @Prop()
  providerId: string;

  @Prop({ type: String, required: true })
  reference: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ default: 1 })
  status: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
