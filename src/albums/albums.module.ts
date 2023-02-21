import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from 'src/entities/album.entiry';
import { TrackEntity } from 'src/entities/track.entity';

import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity, TrackEntity])],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
