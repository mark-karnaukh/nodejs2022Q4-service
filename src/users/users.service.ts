import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  // Will be replaced with a real DB later...
  private readonly users: User[] = [];

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
