import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsUUID,
  IsOptional,
  IsDefined,
} from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsDefined()
  year: number;

  @IsUUID()
  @IsOptional()
  artistId: string | null;
}
