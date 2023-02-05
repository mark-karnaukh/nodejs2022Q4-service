import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  findAll() {
    return 'find all artists';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `find one artist by id ${id}`;
  }

  @Post()
  create(@Body() createAlbumDto: unknown) {
    return `create new artist: ${JSON.stringify(createAlbumDto)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlbumDto: unknown) {
    return `update artist ${id}: ${JSON.stringify(updateAlbumDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `remove artist ${id}`;
  }
}
