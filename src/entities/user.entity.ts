import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  login: string;

  @Exclude()
  @Column()
  password: string;

  @Column('int')
  version: number;

  @Column('bigint')
  @Transform(({ value }) => Number(value))
  createdAt: number;

  @Column('bigint')
  @Transform(({ value }) => Number(value))
  updatedAt: number;

  @Column({ nullable: true })
  @Exclude()
  refreshToken?: string;
}
