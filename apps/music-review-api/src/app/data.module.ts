
import { Album, AlbumSchema } from './album/album.schema';
import { Artist, ArtistSchema } from './artist/artist.schema';
import { AlbumController } from './album/album.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';



import { UserService } from './user/user.service';

import { User, UserSchema } from './user/user.schema';


import { UserController } from './user/user.controller';
import { AlbumService } from './album/album.service';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Artist.name, schema: ArtistSchema },
            { name: Album.name, schema: AlbumSchema }
        ]),
    ],
    controllers: [
        UserController,
        AlbumController,

    ],
    providers: [
        UserService,
        AlbumService,
    ],
})
export class DataModule { }
