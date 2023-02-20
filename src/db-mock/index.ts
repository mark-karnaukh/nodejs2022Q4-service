import { Album } from 'src/interfaces/album.interface';
import { Artist } from 'src/interfaces/artist.interface';
import { Favorites } from 'src/interfaces/favs.interface';
import { Track } from 'src/interfaces/track.interface';
import { User } from 'src/interfaces/user.interface';

// TODO: Should be replaced with a real DB later...
export interface DBState {
  albums: Album[];
  artists: Artist[];
  favs: Favorites;
  tracks: Track[];
  users: User[];
}

export const DBService: DBState = {
  albums: [],
  artists: [],
  favs: {
    artists: [],
    albums: [],
    tracks: [],
  },
  tracks: [],
  users: [],
};
