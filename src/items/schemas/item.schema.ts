import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema({ timestamps: true })
export class Item {
  @Prop({ type: String, required: true })
  label: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ type: String })
  userId: string;

  @Prop({ default: 1 })
  status: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
