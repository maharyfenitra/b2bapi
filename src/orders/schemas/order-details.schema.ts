import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Order } from './order.schema';

export type OrderDetailDocument = HydratedDocument<OrderDetails>;

@Schema({ timestamps: true })
export class OrderDetails {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Order' })
  orderId: Order;

  @Prop({ required: true })
  itemId: string;

  @Prop({ type: String, required: true })
  label: string;

  @Prop({ type: Number, required: true })
  qty: number;

  @Prop({ default: 1 })
  status: number;
}

export const OrderDetailsSchema = SchemaFactory.createForClass(OrderDetails);
