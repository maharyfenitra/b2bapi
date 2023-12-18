import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDetailDocument = HydratedDocument<OrderDetails>;

@Schema({ timestamps: true })
export class OrderDetails {
  @Prop({ type: String })
  orderId: string;

  @Prop({ required: true })
  itemId: string;

  @Prop({ type: String, required: true })
  label: string;

  @Prop({ type: Number, required: true })
  qty: number;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: Date.now })
  createdDate: Date;
}

export const OrderDetailsSchema = SchemaFactory.createForClass(OrderDetails);
