
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
export type ArtistSchema = Artist & Document
import { v4 as uuid } from 'uuid';

export class Artist {
    @Prop({ default: uuid })
    id: string;
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    genre: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true })
    birthDay: string;
    @Prop({ required: true })
    coverImg: string;
    @Prop({
        required: true,
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
    })
    userId: string;




}
export const ArtistSchema = SchemaFactory.createForClass(Artist);