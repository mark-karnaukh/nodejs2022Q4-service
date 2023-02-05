import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { DBService } from 'src/db-mock';
import { Album } from 'src/interfaces';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumsService {
  findAll(): Album[] {
    return DBService.albums;
  }

  findOne(id: string): Album {
    return DBService.albums.find((album) => album.id === id);
  }

  create(createAlbumDto: CreateAlbumDto): Album {
    const idx = DBService.albums.push({
      ...createAlbumDto,
      id: uuidv4(),
    });

    return DBService.albums[idx - 1];
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto): Album {
    const albumToUpdate = DBService.albums.find((album) => album.id == id);
    const albumIdx = DBService.albums.indexOf(albumToUpdate);

    DBService.albums[albumIdx] = {
      ...albumToUpdate,
      ...updateAlbumDto,
      artistId: updateAlbumDto.artistId || undefined,
    };

    return DBService.albums[albumIdx];
  }

  remove(id: string): Album {
    const deletedAlbum = DBService.albums.find((album) => album.id == id);
    const deletedAlbumIdx = DBService.albums.indexOf(deletedAlbum);

    DBService.tracks.forEach((track, idx, arr) => {
      if (track.albumId === id) {
        arr[idx].albumId = null;
      }
    });

    return DBService.albums.splice(deletedAlbumIdx, 1)[0];
  }
}
