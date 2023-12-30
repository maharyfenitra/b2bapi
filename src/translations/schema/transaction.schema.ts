import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeliveryDocument = HydratedDocument<Translation>;

@Schema({ timestamps: true })
export class Translation {
  @Prop({ type: String, required: true })
  key: string;

  @Prop({ type: String, required: true })
  lang: string;

  @Prop({ type: String, required: true })
  value: string;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ default: 1 })
  status: number;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
