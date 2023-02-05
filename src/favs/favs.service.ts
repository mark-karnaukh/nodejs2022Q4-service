import { Injectable } from '@nestjs/common';
import { Favorites } from './interfaces/favs.interface';

@Injectable()
export class FavsService {
  // Will be replaced with a real DB later...
  private readonly favorites: Favorites = {
    artists: [],
    albums: [],
    tracks: [],
  };

  getAll() {
    return 'get all favorites';
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
