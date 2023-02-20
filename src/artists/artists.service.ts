import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Artist } from 'src/interfaces';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistEntity } from 'src/entities/artist.entity';
import { TrackEntity } from 'src/entities/track.entity';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(ArtistEntity)
    private readonly artistRepository: Repository<ArtistEntity>,
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
  ) {}

  findAll(): Promise<ArtistEntity[]> {
    return this.artistRepository.find();
  }

  findOne(id: string): Promise<Artist> {
    return this.artistRepository.findOneBy({ id });
  }

  async create(createArtistDto: CreateArtistDto): Promise<ArtistEntity> {
    const newArtist = this.artistRepository.create({
      ...createArtistDto,
    });

    return await this.artistRepository.save(newArtist);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    const artistToUpdate = await this.artistRepository.findOneBy({ id });

    return await this.artistRepository.save({
      ...artistToUpdate,
      ...updateArtistDto,
    });
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

    return this.artistRepository.remove(artistToDelete);
  }
}
