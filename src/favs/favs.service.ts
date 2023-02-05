import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db-mock';
import { Favorites } from 'src/interfaces';

@Injectable()
export class FavsService {
  getAll(): Favorites {
    return DBService.favs;
  }

  addTrack(id: string) {
    return `add track ${id} to the favorites`;
  }

  removeTrack(id: string) {
    return `remove track ${id} from favorite`;
  }

  addAlbum(id: string) {
    return `add album ${id} to the favorites`;
  }

  removeAlbum(id: string) {
    return `remove album ${id} from favorite`;
  }

  addArtist(id: string) {
    return `add artist ${id} to the favorites`;
  }

  removeArtist(id: string) {
    return `remove artist ${id} from favorite`;
  }
}
