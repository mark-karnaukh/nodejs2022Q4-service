import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser = this.userRepository.create({
      ...createUserDto,
      updatedAt: new Date().valueOf(),
      createdAt: new Date().valueOf(),
      version: 1,
    });

    return await this.userRepository.save(newUser);
  }

  async update(
    id: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<UserEntity> {
    const userToUpdate = await this.userRepository.findOneBy({ id });

    await this.userRepository.update(
      { id },
      {
        version: userToUpdate.version + 1,
        updatedAt: new Date().valueOf(),
        password: updatePasswordDto.newPassword,
      },
    );

    return await this.userRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<UserEntity> {
    const userToDelete = await this.userRepository.findOneBy({ id });

    await this.userRepository.delete({ id });

    return userToDelete;
  }
}
