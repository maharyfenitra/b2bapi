
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDetailDocument = HydratedDocument<OrderDetails>;

@Schema()
export class OrderDetails {
    
    @Prop({ type: String })
    order_id: string;

    @Prop()
    item_id: string;

    @Prop({ type: String})
    label: string;

    @Prop({ type: Number})
    qty: number;

    @Prop({ default: 1})
    status: number;


}

export const OrderDetailsSchema = SchemaFactory.createForClass(OrderDetails);
