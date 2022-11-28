import { Genre } from './genre.enum';
export class Artist {
    constructor(
        public id: number,
        public name: string,
        public birthday: string,
        public description: string,
        public genre: Genre,
        public coverImg: string,

    ) {

    }


}