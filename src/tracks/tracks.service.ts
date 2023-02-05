import { Injectable } from '@nestjs/common';
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

  create(createTrackDto: CreateTrackDto) {
    return `create new track: ${JSON.stringify(createTrackDto)}`;
  }

  update(id: string, updateTrackDto: UpdateExampleDto) {
    return `update track ${id}: ${JSON.stringify(updateTrackDto)}`;
  }

  remove(id: string) {
    return `remove track ${id}`;
  }
}
