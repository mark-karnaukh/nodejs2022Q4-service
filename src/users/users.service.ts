import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { DBService } from 'src/db-mock';
import { User } from 'src/interfaces';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UsersService {
  findAll(): User[] {
    return DBService.users;
  }

  findOne(id: string): User {
    const user = DBService.users.find((user) => user.id === id);

    return user;
  }

  create(createUserDto: CreateUserDto): User {
    const idx = DBService.users.push({
      ...createUserDto,
      id: uuidv4(),
      updatedAt: new Date().valueOf(),
      createdAt: new Date().valueOf(),
      version: 1,
    });

    return DBService.users[idx - 1];
  }

  update(id: string, updatePasswordDto: UpdatePasswordDto): User {
    const userToUpdate = DBService.users.find((artist) => artist.id == id);
    const userIdx = DBService.users.indexOf(userToUpdate);

    DBService.users[userIdx] = {
      ...userToUpdate,
      version: userToUpdate.version + 1,
      updatedAt: new Date().valueOf(),
      password: updatePasswordDto.newPassword,
    };

    return DBService.users[userIdx];
  }

  remove(id: string): User {
    const userToDelete = DBService.users.find((album) => album.id == id);
    const userIdx = DBService.users.indexOf(userToDelete);

    return DBService.users.splice(userIdx, 1)[0];
  }
}
