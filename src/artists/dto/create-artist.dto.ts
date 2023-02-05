import { IsString, IsNotEmpty, IsBoolean, IsDefined } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsDefined()
  grammy: boolean;
}
