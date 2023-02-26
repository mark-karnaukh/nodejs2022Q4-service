import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DBService } from 'src/db-mock';
import { AlbumEntity } from 'src/entities/album.entiry';
import { ArtistEntity } from 'src/entities/artist.entity';
import { FavoritesEntity } from 'src/entities/favs.entity';
import { TrackEntity } from 'src/entities/track.entity';
import { FavoritesResponse } from 'src/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class FavsService {
  favoritesInstance: FavoritesEntity;

  constructor(
    @InjectRepository(ArtistEntity)
    private readonly artistRepository: Repository<ArtistEntity>,
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
    @InjectRepository(AlbumEntity)
    private readonly albumRepository: Repository<AlbumEntity>,
    @InjectRepository(FavoritesEntity)
    private readonly favoritesRepository: Repository<FavoritesEntity>,
  ) {}

  async onModuleInit() {
    const favorites = await this.favoritesRepository.find();

    if (!favorites.length) {
      this.favoritesInstance = this.favoritesRepository.create();

      return await this.favoritesRepository.save(this.favoritesInstance);
    }

    this.favoritesInstance = favorites[0];
  }

  async getAll(): Promise<FavoritesResponse> {
    return (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];
  }

  async addTrack(id: string) {
    const trackToAdd = await this.trackRepository.findOneBy({ id });

    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    favorites.tracks.push(trackToAdd);

    return this.favoritesRepository.save(favorites);
  }

  async isTrackExist(id: string): Promise<boolean> {
    return !!(await this.trackRepository.findOneBy({ id }));
  }

  async isTrackInFavs(id: string): Promise<boolean> {
    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    return !!favorites.tracks.find((track) => track.id === id);
  }

  async removeTrack(id: string) {
    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    favorites.tracks = favorites.tracks.filter((track) => track.id !== id);

    return this.favoritesRepository.save(favorites);
  }

  async addAlbum(id: string) {
    const albumToAdd = await this.albumRepository.findOneBy({ id });

    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    favorites.albums.push(albumToAdd);

    return this.favoritesRepository.save(favorites);
  }

  async isAlbumExist(id: string): Promise<boolean> {
    return !!(await this.albumRepository.findOneBy({ id }));
  }

  async isAlbumInFavs(id: string): Promise<boolean> {
    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    return !!favorites.albums.find((album) => album.id === id);
  }

  async removeAlbum(id: string) {
    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    favorites.albums = favorites.albums.filter((album) => album.id !== id);

    return this.favoritesRepository.save(favorites);
  }

  async addArtist(id: string) {
    const artistToAdd = await this.artistRepository.findOneBy({ id });

    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    favorites.artists.push(artistToAdd);

    return this.favoritesRepository.save(favorites);
  }

  async isArtistExist(id: string): Promise<boolean> {
    return !!(await this.artistRepository.findOneBy({ id }));
  }

  async isArtistInFavs(id: string): Promise<boolean> {
    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    return !!favorites.artists.find((artist) => artist.id === id);
  }

  async removeArtist(id: string) {
    const favorites = (
      await this.favoritesRepository.find({
        relations: {
          artists: true,
          albums: true,
          tracks: true,
        },
      })
    )[0];

    favorites.artists = favorites.artists.filter((artist) => artist.id !== id);

    return this.favoritesRepository.save(favorites);
  }
}
