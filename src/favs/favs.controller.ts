import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AlbumsService } from 'src/albums/albums.service';
import { ArtistsService } from 'src/artists/artists.service';
import { TracksService } from 'src/tracks/tracks.service';
import { FavsService } from './favs.service';

@Controller('favs')
export class FavsController {
  constructor(
    private readonly favsService: FavsService,
    private readonly tracksService: TracksService,
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
  ) {}

  @Get()
  getAll() {
    return this.favsService.getAll();
  }

  @Post('/track/:id')
  addTrack(@Param('id') id: string) {
    return `${this.tracksService.findOne(id)} \n ${this.favsService.addTrack(
      id,
    )}`;
  }

  @Delete('/track/:id')
  removeTrack(@Param('id') id: string) {
    return this.favsService.removeTrack(id);
  }

  @Post('/album/:id')
  addAlbum(@Param('id') id: string) {
    return `${this.albumsService.findOne(id)} \n ${this.favsService.addAlbum(
      id,
    )}`;
  }

  @Delete('/album/:id')
  removeAlbum(@Param('id') id: string) {
    return this.favsService.removeAlbum(id);
  }

  @Post('/artist/:id')
  addArtist(@Param('id') id: string) {
    return `${this.artistsService.findOne(id)} \n ${this.favsService.addArtist(
      id,
    )}`;
  }

  @Delete('/artist/:id')
  removeArtist(@Param('id') id: string) {
    return this.favsService.removeArtist(id);
  }
}
