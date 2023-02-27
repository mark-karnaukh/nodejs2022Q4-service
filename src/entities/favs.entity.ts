export interface Favorites {
  artists: string[]; // favorite artists ids
  albums: string[]; // favorite albums ids
  tracks: string[]; // favorite tracks ids
}

import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AlbumEntity } from './album.entiry';
import { ArtistEntity } from './artist.entity';
import { TrackEntity } from './track.entity';

@Entity()
export class FavoritesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => ArtistEntity, (artist) => artist.favorites)
  artists: ArtistEntity[];

  @OneToMany(() => AlbumEntity, (album) => album.favorites)
  albums: AlbumEntity[];

  @OneToMany(() => TrackEntity, (track) => track.favorites)
  tracks: TrackEntity[];
}
