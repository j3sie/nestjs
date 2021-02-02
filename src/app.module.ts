import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './list/list.controller';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController, ListController],
  providers: [AppService],
})
export class AppModule {}