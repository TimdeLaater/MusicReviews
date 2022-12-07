import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AlbumSchema = HydratedDocument<Album>;
import { v4 as uuid } from 'uuid';
export class Album {
    @Prop({ default: uuid })
    id: number;
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    genre: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true })
    releaseDate: string;
    @Prop({ required: true })
    coverImg: string;
    @Prop({ required: true })
    language: string;
    @Prop({ required: false })
    rating: number;
    @Prop({
        required: true,
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
    })
    userId: string;
    @Prop({
        required: true,
        type: MongooseSchema.Types.ObjectId,
        ref: 'Artist',
    })
    artistId: string;



}
export const AlbumSchema = SchemaFactory.createForClass(Album);