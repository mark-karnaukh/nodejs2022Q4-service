import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from 'src/entities/album.entiry';
import { ArtistEntity } from 'src/entities/artist.entity';
import { TrackEntity } from 'src/entities/track.entity';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity, TrackEntity, AlbumEntity])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}
