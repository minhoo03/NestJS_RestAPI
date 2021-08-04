// Controller - Url 매핑 라우터, request, Query, Body 다룬다.
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {
    // ▲ MovieService import
  }

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie { // 반환 타입 Movie
    // Param에서 id를 얻고 변수 movieId에 담음
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    console.log(this.moviesService.deleteOne(movieId))
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData)
  }
}
