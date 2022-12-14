import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { TokenMiddleware } from './auth/token.middleware';
import { DataModule } from './data.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // `mongodb+srv://TimDl:NWNZrSwUEhnQCj3@music-review.kxfffto.mongodb.net/?retryWrites=true&w=majority`
      `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/?retryWrites=true&w=majority`
    ),
    AuthModule,
    DataModule,
    AlbumModule,
    ArtistModule,
    RouterModule.register([
      {
        path: 'auth-api',
        module: AuthModule,
      },
      {
        path: 'data-api',
        module: DataModule,
      },
      {
        path: 'album',
        module: AlbumModule,
      }, {
        path: 'artist',
        module: ArtistModule,
      },

    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(TokenMiddleware).forRoutes('data-api');
  // }
}
