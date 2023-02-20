import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistEntity } from 'src/entities/artist.entity';
import { TrackEntity } from 'src/entities/track.entity';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistEntity, TrackEntity])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}
