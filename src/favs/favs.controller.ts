import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FavsService } from './favs.service';

@ApiTags('Favorites')
@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Get()
  getAll() {
    return this.favsService.getAll();
  }

  @Post('/track/:id')
  addTrack(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    if (!this.favsService.isTrackExist(id)) {
      throw new UnprocessableEntityException();
    }

    return this.favsService.addTrack(id);
  }

  @Delete('/track/:id')
  @HttpCode(204)
  removeTrack(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    if (!this.favsService.isTrackInFavs(id)) {
      throw new BadRequestException();
    }

    return this.favsService.removeTrack(id);
  }

  @Post('/album/:id')
  addAlbum(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    if (!this.favsService.isAlbumExist(id)) {
      throw new UnprocessableEntityException();
    }

    return this.favsService.addAlbum(id);
  }

  @Delete('/album/:id')
  @HttpCode(204)
  removeAlbum(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    if (!this.favsService.isAlbumInFavs(id)) {
      throw new BadRequestException();
    }

    return this.favsService.removeAlbum(id);
  }

  @Post('/artist/:id')
  addArtist(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    if (!this.favsService.isArtistExist(id)) {
      throw new UnprocessableEntityException();
    }

    return this.favsService.addArtist(id);
  }

  @Delete('/artist/:id')
  @HttpCode(204)
  removeArtist(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    if (!this.favsService.isArtistInFavs(id)) {
      throw new BadRequestException();
    }

    return this.favsService.removeArtist(id);
  }
}
