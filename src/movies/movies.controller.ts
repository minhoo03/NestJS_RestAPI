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
import { CreateMovieDto } from './dto/create-movie.dio';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
  getOne(@Param('id') movieId: number): Movie { // 반환 타입 Movie
    // Param에서 id를 얻고 변수 movieId에 담음
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    console.log(this.moviesService.deleteOne(movieId))
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData)
  }
}
