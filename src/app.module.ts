import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CoursesModule],
})
export class AppModule {}
