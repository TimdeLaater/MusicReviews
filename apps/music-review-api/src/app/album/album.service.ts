
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
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }
    async getAll(): Promise<Album[]> {
        return this.album.find({});
    }
    async create(name: string, discription: string, genre: string, releaseDate: string, coverImg: string, userId: string) {
        const user = await this.userModel.findOne({ id: userId })
        if (user == null) throw new Error("user doesn't exist");
        const newAlbum = new this.album({ name: name, discription: discription, genre: genre, releaseDate: releaseDate, coverImg: coverImg, userId: userId });
        await newAlbum.save();

    }
    async getById(id: string): Promise<Album> {
        const albumById = await this.album.findOne({ id: id });
        return albumById
    }
    async delete(id: string) {
        await this.userModel.findByIdAndDelete(id)
    }
    async edit(id: string, name: string, discription: string, genre: string, releaseDate: string, coverImg: string) {
        await this.album.findOneAndUpdate({ id: id }, { name: name, discription: discription, genre: genre, releaseDate: releaseDate, coverImg: coverImg });

    }

}