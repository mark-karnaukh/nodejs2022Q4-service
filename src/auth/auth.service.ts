import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const userExists = await this.usersService.findByLogin(createUserDto.login);

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hash = await this.hash(createUserDto.password);

    const newUser = await this.usersService.create({
      ...createUserDto,
      password: hash,
    });
    const tokens = await this.getTokens(newUser.id, newUser.login);
    // await this.updateRefreshToken(newUser.id, tokens.refreshToken);
    return tokens;
  }

  async login(data: AuthDto) {
    const user = await this.usersService.findByLogin(data.login);

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const isPasswordMatch = await bcrypt.compare(user.password, data.password);
    if (!isPasswordMatch) {
      throw new BadRequestException('Password is incorrect');
    }

    const tokens = await this.getTokens(user.id, user.login);

    // await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async hash(data: string) {
    const salt = await bcrypt.genSalt(
      Number(this.configService.get<string>('CRYPT_SALT')),
    );
    return await bcrypt.hash(data, salt);
  }

  async logout(userId: string) {
    // TODO: Will be implemented later
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    // TODO: Will be implemented later
  }

  async getTokens(userId: string, login: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          userId,
          login,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET_KEY'),
          expiresIn: this.configService.get<string>('TOKEN_EXPIRE_TIME'),
        },
      ),
      this.jwtService.signAsync(
        {
          userId,
          login,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET_REFRESH_KEY'),
          expiresIn: this.configService.get<string>(
            'TOKEN_REFRESH_EXPIRE_TIME',
          ),
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
