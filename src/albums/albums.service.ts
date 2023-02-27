import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumEntity } from 'src/entities/album.entiry';
import { TrackEntity } from 'src/entities/track.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(AlbumEntity)
    private readonly albumRepository: Repository<AlbumEntity>,
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
  ) {}

  findAll(): Promise<AlbumEntity[]> {
    return this.albumRepository.find();
  }

  findOne(id: string): Promise<AlbumEntity> {
    return this.albumRepository.findOneBy({ id });
  }

  async create(createAlbumDto: CreateAlbumDto): Promise<AlbumEntity> {
    const newAlbum = this.albumRepository.create(createAlbumDto);

    return await this.albumRepository.save(newAlbum);
  }

  async update(
    id: string,
    updateAlbumDto: UpdateAlbumDto,
  ): Promise<AlbumEntity> {
    await this.albumRepository.update({ id }, updateAlbumDto);

    return await this.albumRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<AlbumEntity> {
    const albumToDelete = await this.albumRepository.findOneBy({ id });

    const relatedTracks = await this.trackRepository.find({
      where: {
        albumId: id,
      },
    });

    await this.trackRepository.save(
      relatedTracks.map((track) => ({ ...track, albumId: null })),
    );

    await this.albumRepository.delete({ id });

    return albumToDelete;
  }
}
