import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db-mock';
import { Artist } from 'src/interfaces';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistsService {
  findAll(): Artist[] {
    return DBService.artists;
  }

  findOne(id: string): Artist {
    return DBService.artists.find((artist) => artist.id === id);
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
