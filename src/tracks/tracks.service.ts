import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { DBService } from 'src/db-mock';
import { Track } from 'src/interfaces';
import { UpdateExampleDto } from 'src/example/dto/update-example.dto';
import { CreateTrackDto } from './dto/create-track.dto';

@Injectable()
export class TracksService {
  findAll(): Track[] {
    return DBService.tracks;
  }

  findOne(id: string): Track {
    return DBService.tracks.find((track) => track.id === id);
  }

  create(createTrackDto: CreateTrackDto): Track {
    const idx = DBService.tracks.push({
      ...createTrackDto,
      id: uuidv4(),
    });

    return DBService.tracks[idx - 1];
  }

  update(id: string, updateTrackDto: UpdateExampleDto) {
    return `update track ${id}: ${JSON.stringify(updateTrackDto)}`;
  }

  remove(id: string) {
    return `remove track ${id}`;
  }
}
