import { ArtistInput } from './../interface/artist.interface';
import { Artist } from './artist.schema';
import { ArtistService } from './artist.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";

@Controller()
export class ArtistController {
    constructor(private readonly artistService: ArtistService) { }

    @Get()
    async getAll(): Promise<Artist[]> {
        return this.artistService.getAll();
    }
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Artist> {
        return this.artistService.getById(id);
    }
    @Put(':id')
    async edit(@Param('id') id: string, @Body() artist: ArtistInput) {
        try {
            await this.artistService.edit(
                id,
                artist.name,
                artist.genre,
                artist.description,
                artist.coverImg,
                artist.birthday
            )
        } catch (error) {
            console.log('failed!');
            console.log(artist.name, artist.genre,
                artist.description,
                artist.coverImg,
                artist.birthday)
            console.log(error)
            throw new HttpException('Username invalid', HttpStatus.BAD_REQUEST);
        }

    }
    @Post()
    async create(@Body() artist: ArtistInput): Promise<string> {
        try {
            return await this.artistService.create(
                artist.name,
                artist.genre,
                artist.birthday,
                artist.description,
                artist.coverImg,)


        } catch (error) {
            console.log(error)
        }
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.artistService.delete(id);
    }
}