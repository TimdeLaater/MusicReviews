import { Genre } from './genre.enum';
import { Review } from './../../../../../libs/data/src/lib/review.interface';
import { Artist } from './artist.model';
export class Album {
    // Optioneel description attribuut

    constructor(
        public id: number,
        public name: string,
        public discription: string,
        public genre: Genre,
        public language: string,
        public rating: number,
        // public releaseDate: string,
        // public artist: Artist,
        public coverImg: string,
        // public reviews?: Review[],

    ) { }
}