import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CurrencyDocument = HydratedDocument<Currency>;

@Schema({ timestamps: true })
export class Currency {
  @Prop({ type: String, required: true })
  symbol: string;

  @Prop({ type: String, required: true })
  isoCode: string;

  @Prop({ type: String, required: true })
  label: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ type: String })
  userId: string;

  @Prop({ default: 1 })
  status: number;
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
