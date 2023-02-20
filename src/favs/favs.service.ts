import { Injectable } from '@nestjs/common';
import { DBService } from 'src/db-mock';
import { FavoritesRepsonse } from 'src/interfaces';

@Injectable()
export class FavsService {
  getAll(): FavoritesRepsonse {
    return {
      albums: DBService.albums.filter((album) =>
        DBService.favs.albums.includes(album.id),
      ),
      artists: DBService.artists.filter((artist) =>
        DBService.favs.artists.includes(artist.id),
      ),
      tracks: DBService.tracks.filter((track) =>
        DBService.favs.tracks.includes(track.id),
      ),
    };
  }

  addTrack(id: string) {
    return DBService.favs.tracks.push(id);
  }

  isTrackExist(id: string): boolean {
    return DBService.tracks.some((track) => track.id === id);
  }

  isTrackInFavs(id: string): boolean {
    return DBService.favs.tracks.some((trackId) => trackId === id);
  }

  removeTrack(id: string) {
    const trackIndex = DBService.favs.tracks.indexOf(
      DBService.favs.tracks.find((trackId) => trackId === id),
    );

    return DBService.favs.tracks.splice(trackIndex, 1);
  }

  addAlbum(id: string) {
    return DBService.favs.albums.push(id);
  }

  isAlbumExist(id: string): boolean {
    return DBService.albums.some((album) => album.id === id);
  }

  isAlbumInFavs(id: string): boolean {
    return DBService.favs.albums.some((albumId) => albumId === id);
  }

  removeAlbum(id: string) {
    const albumIndex = DBService.favs.albums.indexOf(
      DBService.favs.albums.find((albumId) => albumId === id),
    );

    return DBService.favs.albums.splice(albumIndex, 1);
  }

  addArtist(id: string) {
    return DBService.favs.artists.push(id);
  }

  isArtistExist(id: string): boolean {
    return !!DBService.artists.find((artists) => artists.id === id);
  }

  isArtistInFavs(id: string): boolean {
    return DBService.favs.artists.some((artistId) => artistId === id);
  }

  removeArtist(id: string) {
    const artistIndex = DBService.favs.artists.indexOf(
      DBService.favs.artists.find((artistId) => artistId === id),
    );

    return DBService.favs.artists.splice(artistIndex, 1);
  }
}
