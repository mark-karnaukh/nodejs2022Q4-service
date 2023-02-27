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
  @IsUUID('4')
  @IsOptional()
  artistId: string | null;

  @ApiProperty()
  @IsUUID('4')
  @IsOptional()
  albumId: string | null;

  @ApiProperty()
  @IsInt()
  @IsDefined()
  duration: number;
}
