import { Injectable, NotFoundException } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

import { PrismaDbService } from '../infra/prisma-db.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaDbService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number): Promise<User> {
    const exists = await this.prisma.user.findUnique({ where: { id } });
    if (!exists) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.prisma.user.delete({ where: { id } });
  }
}
