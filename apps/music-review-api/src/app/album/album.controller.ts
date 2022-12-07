import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { AlbumService } from "./album.service";
import { Album } from './album.schema';

@Controller()
export class AlbumController {
  constructor(private readonly albumService: AlbumService) { }

  @Get()
  async getAll(): Promise<Album[]> {
    return this.albumService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Album> {
    return this.albumService.getById(id);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.albumService.delete(id);
  }

  // @Post()
  // async create(@Body() album: AlbumInput){
  //   try {
  //     return await this.albumService.create(album.name, album.coverImg, album.releaseDate, album.discription, album.genre, album.user);
  //   } catch (e) {
  //     throw new HttpException('invalid album', HttpStatus.BAD_REQUEST);
  //   }
  // }


}