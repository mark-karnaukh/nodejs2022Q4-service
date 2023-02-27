import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from 'src/entities/album.entiry';
import { ArtistEntity } from 'src/entities/artist.entity';
import { FavoritesEntity } from 'src/entities/favs.entity';
import { TrackEntity } from 'src/entities/track.entity';
import { FavsController } from './favs.controller';
import { FavsService } from './favs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AlbumEntity,
      TrackEntity,
      ArtistEntity,
      FavoritesEntity,
    ]),
  ],
  controllers: [FavsController],
  providers: [FavsService],
})
export class FavsModule {}
