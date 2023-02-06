import { IsString, IsNotEmpty, IsBoolean, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsBoolean()
  @IsDefined()
  grammy: boolean;
}
