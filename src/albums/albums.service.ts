import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumsService {
  findAll() {
    return 'find all albums';
  }

  findOne(id: string) {
    return `find one album by id ${id}`;
  }

  create(createAlbumDto: unknown) {
    return `create new album: ${JSON.stringify(createAlbumDto)}`;
  }

  update(id: string, updateAlbumDto: unknown) {
    return `update album ${id}: ${JSON.stringify(updateAlbumDto)}`;
  }

  remove(id: string) {
    return `remove album ${id}`;
  }
}
