
import { Album } from './album.schema';

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/user.schema';

@Injectable()
export class AlbumService {
    constructor(
        @InjectModel(Album.name)
        private album: Model<Album>,
        // @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }
    async getAll(): Promise<Album[]> {
        console.log(this.album.find().exec(), "Hierzo");

        return this.album.find().exec();
    }
    async create(name: string, description: string, genre: string, releaseDate: string, coverImg: string, userId: string) {
        // const user = await this.userModel.findOne({ id: userId })
        // if (user == null) throw new Error("user doesn't exist");
        const newAlbum = new this.album({ name: name, description: description, genre: genre, releaseDate: releaseDate, coverImg: coverImg, userId: userId });
        await newAlbum.save();

    }
    async getById(id: string): Promise<Album> {
        const albumById = await this.album.findOne({ id: id });
        return albumById
    }
    async delete(id: string) {
        // await this.userModel.findByIdAndDelete(id)
    }
    async edit(id: string, name: string, description: string, genre: string, releaseDate: string, coverImg: string) {
        await this.album.findOneAndUpdate({ id: id }, { name: name, description: description, genre: genre, releaseDate: releaseDate, coverImg: coverImg });

    }

}