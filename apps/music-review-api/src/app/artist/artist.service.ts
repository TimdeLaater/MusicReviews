


import { InjectModel } from '@nestjs/mongoose';

import { Injectable } from "@nestjs/common";
import { Artist } from './artist.schema';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
import { Album } from '../album/album.schema';

@Injectable()
export class ArtistService {
    constructor(
        @InjectModel(Artist.name)
        private artist: Model<Artist>,
        @InjectModel(User.name)
        private user: Model<User>,
        @InjectModel(Album.name)
        private album: Model<Album>,
    ) { }
    async getAll(): Promise<Artist[]> {
        return await this.artist.find({});
    }
    async getById(id: string): Promise<Artist> {
        return await this.artist.findOne({ id: id });
    }
    async create(userId: string, name: string, genre: string, description: string, birthDay: string, coverImg: string) {
        const user = await this.user.findOne({ id: userId })
        if (user == null) throw new Error("user doesn't exist");
        const newArtist = new this.artist({name: name, genre: genre, description: description, birthDay: birthDay, coverImg: coverImg})
        await newArtist.save()
    }
    // async edit() {

    // }
    async delete(id: string) {
        await this.artist.findByIdAndRemove(id)
    }
    async getAlbums(artistId: string): Promise<Album[]> {
        const artist = await this.artist.findOne({ id: artistId });
        if (artist == null) throw new Error("Artist doesn't exist");
        return await this.album.find({ artistId: artistId })

    }

}