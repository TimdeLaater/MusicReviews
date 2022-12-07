import { ArtistInput } from './../interface/artist.interface';



import { InjectModel } from '@nestjs/mongoose';

import { Injectable } from "@nestjs/common";
import { Artist, ArtistDocument } from './artist.schema';
import { Model } from 'mongoose';
@Injectable()
export class ArtistService {
    constructor(
        @InjectModel(Artist.name)
        private artist: Model<ArtistDocument>,


    ) { }
    async getAll(): Promise<Artist[]> {
        return await this.artist.find({});
    }
    async getById(id: string): Promise<Artist> {
        return await this.artist.findById(id);
    }
    async create(name: string, genre: string, birthDay: string, description: string, coverImg: string): Promise<string> {
        console.log(name, genre, birthDay, description, coverImg)
        const newItem = new this.artist({
            name, genre, description, birthDay, coverImg
        });
        console.log(newItem.name);
        await newItem.save()
        return newItem.id;


    }
    async edit(id: string, name: string, genre: string, description: string, birthday: string, coverImg: string) {
        try {
            console.log("test1", id, name, genre)
            await this.artist.findOneAndUpdate({ id: id }, {
                name: name,
                genre: genre,
                description: description,
                birthDay: birthday,
                coverImg: coverImg,
            })
        } catch (error) {
            console.log(error, "Service")
        }

    }
    async delete(id: string) {
        await this.artist.findByIdAndRemove(id)
    }
    // async getAlbums(artistId: string): Promise<Album[]> {
    //     const artist = await this.artist.findOne({ id: artistId });
    //     if (artist == null) throw new Error("Artist doesn't exist");
    //     return await this.album.find({ artistId: artistId })

    // }

}