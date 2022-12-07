import { Genre } from './genre.enum';

export interface Album {
    // Optioneel description attribuut


    _id: string,
    name: string,
    description: string,
    releaseDate: string,
    language: string,
    rating: number,

    artistId: string,
    coverImg: string,
    genre: string,
    userId: string,
    // public reviews?: Review[],


}