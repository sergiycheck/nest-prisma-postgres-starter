import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaDbModule } from './resources/infra/prisma-db.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [PrismaDbModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
