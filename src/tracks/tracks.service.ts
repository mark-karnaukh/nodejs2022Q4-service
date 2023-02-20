import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DBService } from 'src/db-mock';
import { Track } from 'src/interfaces';
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
    const newArtist = this.trackRepository.create({
      ...createTrackDto,
    });

    return await this.trackRepository.save(newArtist);
  }

  update(id: string, updateTrackDto: UpdateTrackDto): Track {
    const trackToUpdate = DBService.tracks.find((artist) => artist.id == id);
    const trackIdx = DBService.tracks.indexOf(trackToUpdate);

    DBService.tracks[trackIdx] = {
      ...trackToUpdate,
      ...updateTrackDto,
    };

    return DBService.tracks[trackIdx];
  }

  remove(id: string): Track {
    const trackToDelete = DBService.tracks.find((album) => album.id == id);
    const trackIdx = DBService.tracks.indexOf(trackToDelete);

    return DBService.tracks.splice(trackIdx, 1)[0];
  }
}
