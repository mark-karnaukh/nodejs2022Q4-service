import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

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

  create(createArtistDto: CreateArtistDto): Artist {
    const idx = DBService.artists.push({
      ...createArtistDto,
      id: uuidv4(),
    });

    return DBService.artists[idx - 1];
  }

  update(id: string, updateArtistDto: UpdateArtistDto): Artist {
    const artistToUpdate = DBService.artists.find((artist) => artist.id == id);
    const artistIdx = DBService.artists.indexOf(artistToUpdate);

    DBService.artists[artistIdx] = {
      ...artistToUpdate,
      ...updateArtistDto,
    };

    return DBService.artists[artistIdx];
  }

  remove(id: string): Artist {
    const artistToDelete = DBService.artists.find((album) => album.id == id);
    const artistIdx = DBService.artists.indexOf(artistToDelete);

    DBService.tracks.forEach((track, idx, arr) => {
      if (track.artistId === id) {
        arr[idx].artistId = null;
      }
    });

    return DBService.artists.splice(artistIdx, 1)[0];
  }
}
