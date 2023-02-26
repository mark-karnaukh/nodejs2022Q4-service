import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FavoritesEntity } from './favs.entity';

@Entity()
export class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  artistId: string;

  @Column()
  year: number;

  @ManyToOne(() => FavoritesEntity, (favorites) => favorites.artists)
  favorites: FavoritesEntity;
}
