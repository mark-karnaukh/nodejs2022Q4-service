import { Injectable } from '@nestjs/common';

@Injectable()
export class ArtistsService {
  findAll() {
    return 'find all artists';
  }

  findOne(id: string) {
    return `find one artist by id ${id}`;
  }

  create(createArtistDto: unknown) {
    return `create new artist: ${JSON.stringify(createArtistDto)}`;
  }

  update(id: string, updateArtistDto: unknown) {
    return `update artist ${id}: ${JSON.stringify(updateArtistDto)}`;
  }

  remove(id: string) {
    return `remove artist ${id}`;
  }
}
