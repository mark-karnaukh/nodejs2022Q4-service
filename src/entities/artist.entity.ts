import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FavoritesEntity } from './favs.entity';

@Entity()
export class ArtistEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  grammy: boolean;

  @ManyToOne(() => FavoritesEntity, (favorites) => favorites.artists)
  favorites: FavoritesEntity;
}
