import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TrackEntity } from 'src/entities/track.entity';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>,
  ) {}

  findAll(): Promise<TrackEntity[]> {
    return this.trackRepository.find();
  }

  findOne(id: string): Promise<TrackEntity> {
    return this.trackRepository.findOneBy({ id });
  }

  async create(createTrackDto: CreateTrackDto): Promise<TrackEntity> {
    const newTrack = this.trackRepository.create(createTrackDto);

    return await this.trackRepository.save(newTrack);
  }

  async update(
    id: string,
    updateTrackDto: UpdateTrackDto,
  ): Promise<TrackEntity> {
    await this.trackRepository.update({ id }, updateTrackDto);

    return await this.trackRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<TrackEntity> {
    const trackToDelete = await this.trackRepository.findOneBy({ id });

    await this.trackRepository.delete({ id });

    return trackToDelete;
  }
}
