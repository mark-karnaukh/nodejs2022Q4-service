import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Controller('album')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  findAll() {
    return 'find all albums';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `find one album by id ${id}`;
  }

  @Post()
  create(@Body() createAlbumDto: unknown) {
    return `create new album: ${JSON.stringify(createAlbumDto)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlbumDto: unknown) {
    return `create album ${id}: ${JSON.stringify(updateAlbumDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `remove album ${id}`;
  }
}
