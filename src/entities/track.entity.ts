import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FavoritesEntity } from './favs.entity';

@Entity()
export class TrackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  artistId: string;

  @Column({ nullable: true })
  albumId: string;

  @Column()
  duration: number;

  @ManyToOne(() => FavoritesEntity, (favorites) => favorites.artists)
  favorites: FavoritesEntity;
}
