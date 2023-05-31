import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Artist } from 'src/interfaces';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistEntity } from 'src/entities/artist.entity';
import { TrackEntity } from 'src/entities/track.entity';
import { AlbumEntity } from 'src/entities/album.entiry';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(ArtistEntity)
    private readonly artistRepository: Repository<ArtistEntity>,
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
    @InjectRepository(AlbumEntity)
    private readonly albumRepository: Repository<AlbumEntity>,
  ) {}

  findAll(): Promise<ArtistEntity[]> {
    return this.artistRepository.find();
  }

  findOne(id: string): Promise<Artist> {
    return this.artistRepository.findOneBy({ id });
  }

  async create(createArtistDto: CreateArtistDto): Promise<ArtistEntity> {
    const newArtist = this.artistRepository.create(createArtistDto);

    return await this.artistRepository.save(newArtist);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    await this.artistRepository.update({ id }, updateArtistDto);

    return await this.artistRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<ArtistEntity> {
    const artistToDelete = await this.artistRepository.findOneBy({ id });

    const relatedTracks = await this.trackRepository.find({
      where: {
        artistId: id,
      },
    });

    await this.trackRepository.save(
      relatedTracks.map((track) => ({ ...track, artistId: null })),
    );

    const relatedAlbums = await this.albumRepository.find({
      where: {
        artistId: id,
      },
    });

    await this.albumRepository.save(
      relatedAlbums.map((album) => ({ ...album, artistId: null })),
    );

    await this.artistRepository.delete({ id });

    return artistToDelete;
  }
}
