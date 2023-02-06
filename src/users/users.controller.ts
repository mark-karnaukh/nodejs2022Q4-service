import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    // TODO: Use interceptor and class-transformer library to exclude this field from the response object
    return this.usersService
      .findAll()
      .map((user) => ({ ...user, password: undefined }));
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    // TODO: Use interceptor and  class-transformer library to exclude this field from the response object
    return { ...user, password: undefined };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // TODO: Use interceptor and  class-transformer library to exclude this field from the response object
    return { ...this.usersService.create(createUserDto), password: undefined };
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    const user = this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    if (!(user.password === updatePasswordDto.oldPassword)) {
      throw new ForbiddenException();
    }

    // TODO: Use interceptor and class-transformer library to exclude this field from the response object
    return {
      ...this.usersService.update(id, updatePasswordDto),
      password: undefined,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const user = this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    // TODO: Use interceptor and class-transformer library to exclude this field from the response object
    return { ...this.usersService.remove(id), password: undefined };
  }
}
