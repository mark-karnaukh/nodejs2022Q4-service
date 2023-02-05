import { Injectable } from '@nestjs/common';
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
    return {
      ...DBService.users.find((user) => user.id === id),
      password: undefined,
    };
  }

  create(createUserDto: CreateUserDto) {
    return `create new user: ${JSON.stringify(createUserDto)}`;
  }

  update(id: string, updatePasswordDto: UpdatePasswordDto) {
    return `update user ${id}: ${JSON.stringify(updatePasswordDto)}`;
  }

  remove(id: string) {
    return `remove user ${id}`;
  }
}
