import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import isEmail from 'validator/lib/isEmail';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ default: uuid, index: true })
  id: string;

  @Prop({
    required: true,
    unique: true,
  })
  name: string;


  @Prop({
    required: true,
    default: true,
  })
  isActive: boolean;

  @Prop({
    required: true,
    validate: {
      validator: isEmail,
      message: 'should be a valid email address',
    }
  })
  emailAddress: string;

  // we don't use hooks to ensure the topics exist, as nestjs does not play nice
  // https://github.com/nestjs/mongoose/issues/7



}

export const UserSchema = SchemaFactory.createForClass(User);
