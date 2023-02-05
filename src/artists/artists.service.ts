import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistsService {
  findAll() {
    return 'find all artists';
  }

  findOne(id: string) {
    return `find one artist by id ${id}`;
  }

  create(createArtistDto: CreateArtistDto) {
    return `create new artist: ${JSON.stringify(createArtistDto)}`;
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return `update artist ${id}: ${JSON.stringify(updateArtistDto)}`;
  }

  remove(id: string) {
    return `remove artist ${id}`;
  }
}
