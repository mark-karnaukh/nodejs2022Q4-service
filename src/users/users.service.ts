import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return 'find all users';
  }

  findOne(id: string) {
    return `find one user by id ${id}`;
  }

  create(createUserDto: unknown) {
    return `create new user: ${JSON.stringify(createUserDto)}`;
  }

  update(id: string, updateUserDto: unknown) {
    return `update user ${id}: ${JSON.stringify(updateUserDto)}`;
  }

  remove(id: string) {
    return `remove user ${id}`;
  }
}
