import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  signUp(createUserDto: CreateUserDto) {
    return 'Sign Up';
  }

  async signIn(data: AuthDto) {
    return 'Sign In';
  }

  async logout(userId: string) {
    return 'Log Out';
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    return 'Update Refresh Token';
  }

  async getTokens(userId: string, login: string) {
    return 'Get Tokens';
  }
}
