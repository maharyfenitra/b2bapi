import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDetailDocument = HydratedDocument<OrderDetails>;

@Schema({ timestamps: true })
export class OrderDetails {
  @Prop({ type: String })
  order_id: string;

  @Prop({ required: true })
  item_id: string;

  @Prop({ type: String, required: true })
  label: string;

  @Prop({ type: Number, required: true })
  qty: number;

  @Prop({ default: 1 })
  status: number;
}

export const OrderDetailsSchema = SchemaFactory.createForClass(OrderDetails);
