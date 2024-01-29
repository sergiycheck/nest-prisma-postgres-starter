import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaDbModule } from '../infra/prisma-db.module';
import { UsersController } from './users.controller';

@Module({
  imports: [PrismaDbModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
