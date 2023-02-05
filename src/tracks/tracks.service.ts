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

  update(id: string, updateTrackDto: UpdateExampleDto): Track {
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
