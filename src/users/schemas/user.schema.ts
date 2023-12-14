
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop()
    firstName: string;

    @Prop({required: true})
    lastName: string;

    @Prop({required: true})
    password: string;

    @Prop()
    mail: number;

    @Prop()
    birthDay: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
