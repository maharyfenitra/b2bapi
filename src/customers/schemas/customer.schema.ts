import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ timestamps: true })
export class Customer {
  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  mail: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  adress: string;

  @Prop({ type: String })
  city: string;

  @Prop({ type: String })
  area: string;

  @Prop({ type: String })
  stat: string;

  @Prop({ type: String })
  nif: string;

  @Prop({ type: String })
  contactMail: string;

  @Prop({ type: String })
  contactPhoneNumber: string;

  @Prop({ type: String })
  contactPost: string;

  @Prop({ default: 1 })
  status: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
