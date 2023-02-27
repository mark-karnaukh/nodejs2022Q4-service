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
  async addTrack(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isTrackExist = await this.favsService.isTrackExist(id);

    if (!isTrackExist) {
      throw new UnprocessableEntityException();
    }

    return this.favsService.addTrack(id);
  }

  @Delete('/track/:id')
  @HttpCode(204)
  async removeTrack(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isTrackInFavs = await this.favsService.isTrackInFavs(id);

    if (!isTrackInFavs) {
      throw new BadRequestException();
    }

    return this.favsService.removeTrack(id);
  }

  @Post('/album/:id')
  async addAlbum(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isAlbumExist = await this.favsService.isAlbumExist(id);

    if (!isAlbumExist) {
      throw new UnprocessableEntityException();
    }

    return this.favsService.addAlbum(id);
  }

  @Delete('/album/:id')
  @HttpCode(204)
  async removeAlbum(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isAlbumInFavs = await this.favsService.isAlbumInFavs(id);

    if (!isAlbumInFavs) {
      throw new BadRequestException();
    }

    return this.favsService.removeAlbum(id);
  }

  @Post('/artist/:id')
  async addArtist(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isArtistExist = await this.favsService.isArtistExist(id);

    if (!isArtistExist) {
      throw new UnprocessableEntityException();
    }

    return this.favsService.addArtist(id);
  }

  @Delete('/artist/:id')
  @HttpCode(204)
  async removeArtist(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isArtistInFavs = await this.favsService.isArtistInFavs(id);

    if (!isArtistInFavs) {
      throw new BadRequestException();
    }

    return this.favsService.removeArtist(id);
  }
}
