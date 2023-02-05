import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumsService {
  findAll() {
    return 'find all albums';
  }

  findOne(id: string) {
    return `find one album by id ${id}`;
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
