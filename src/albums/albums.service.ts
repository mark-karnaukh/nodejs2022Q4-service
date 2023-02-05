import { Injectable } from '@nestjs/common';
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

  create(createAlbumDto: CreateAlbumDto) {
    return `create new album: ${JSON.stringify(createAlbumDto)}`;
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return `update album ${id}: ${JSON.stringify(updateAlbumDto)}`;
  }

  remove(id: string) {
    return `remove album ${id}`;
  }
}
