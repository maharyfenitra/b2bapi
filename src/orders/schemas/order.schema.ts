import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: String })
  client_id: string;

  @Prop()
  provider_id: string;

  @Prop({ type: String, required: true })
  reference: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Date, default: Date.now })
  created_date: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
