// 모듈
// 모든 로직을 모아 앱 실행

import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
