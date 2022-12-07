import { AlbumController } from './album.controller';
import { Album, AlbumSchema } from './album.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { AlbumService } from './album.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }])],
    controllers: [AlbumController],
    providers: [AlbumService],
})
export class AlbumModule {

}