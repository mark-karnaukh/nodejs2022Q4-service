import { Injectable } from '@nestjs/common';
import { UpdateExampleDto } from 'src/example/dto/update-example.dto';
import { CreateTrackDto } from './dto/create-track.dto';

@Injectable()
export class TracksService {
  findAll() {
    return 'find all tracks';
  }

  findOne(id: string) {
    return `find one track by id ${id}`;
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
