import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findOne(+id);
  }

  @Post()
  async create(@Body() data: Prisma.UserCreateInput): Promise<User> {
    return this.usersService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.usersService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<User> {
    return this.usersService.remove(+id);
  }
}
