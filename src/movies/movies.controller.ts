import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This is Movie API';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    // Param에서 id를 얻고 변수 movieId에 담음
    return `This is One Movie. id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie. id: ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `Update. id: ${movieId}`;
  }
}
