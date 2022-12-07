import { Genre } from './genre.enum';
export interface Artist {

    _id?: string,
    name: string,
    description: string,
    genre: string,
    birthday: string,
    coverImg: string,
    userId?: string;
}