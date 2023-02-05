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
    return 'get all favorites';
  }

  @Post('/track/:id')
  addTrack(@Param('id') id: string) {
    return `add track ${id} to the favorites`;
  }

  @Delete('/track/:id')
  removeTrack(@Param('id') id: string) {
    return `remove track ${id} from favorite`;
  }

  @Post('/album/:id')
  addAlbum(@Param('id') id: string) {
    return `add album ${id} to the favorites`;
  }

  @Delete('/album/:id')
  removeAlbum(@Param('id') id: string) {
    return `remove album ${id} from favorite`;
  }

  @Post('/artist/:id')
  addArtist(@Param('id') id: string) {
    return `add artist ${id} to the favorites`;
  }

  @Delete('/artist/:id')
  removeArtist(@Param('id') id: string) {
    return `remove artist ${id} from favorite`;
  }
}
