import { Injectable } from '@nestjs/common';

@Injectable()
export class TracksService {
  findAll() {
    return 'find all tracks';
  }

  findOne(id: string) {
    return `find one track by id ${id}`;
  }

  create(createTrackDto: unknown) {
    return `create new track: ${JSON.stringify(createTrackDto)}`;
  }

  update(id: string, updateTrackDto: unknown) {
    return `update track ${id}: ${JSON.stringify(updateTrackDto)}`;
  }

  remove(id: string) {
    return `remove track ${id}`;
  }
}
