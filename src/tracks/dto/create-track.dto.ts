import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsOptional,
  IsInt,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrackDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  artistId: string | null;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  albumId: string | null;

  @ApiProperty()
  @IsInt()
  @IsDefined()
  duration: number;
}
