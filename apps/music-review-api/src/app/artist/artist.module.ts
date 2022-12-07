import { ArtistController } from './artist.controller';
import { Artist, ArtistSchema } from './artist.schema';
import { Module } from "@nestjs/common";
import { ArtistService } from './artist.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }])],
    controllers: [ArtistController],
    providers: [ArtistService],
})
export class ArtistModule {

}