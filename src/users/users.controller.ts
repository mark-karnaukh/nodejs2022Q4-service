import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return 'find all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `find one user by id ${id}`;
  }

  @Post()
  create(@Body() createUserDto: unknown) {
    return `create new user: ${JSON.stringify(createUserDto)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: unknown) {
    return `update user ${id}: ${JSON.stringify(updateUserDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `remove user ${id}`;
  }
}
