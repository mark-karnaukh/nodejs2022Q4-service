import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  oldPassword: string; // previous password

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newPassword: string; // new password
}
