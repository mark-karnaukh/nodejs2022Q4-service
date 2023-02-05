import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UsersService {
  findAll() {
    return 'find all users';
  }

  findOne(id: string) {
    return `find one user by id ${id}`;
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
