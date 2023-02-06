import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsUUID,
  IsOptional,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsInt()
  @IsDefined()
  year: number;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  artistId: string | null;
}
