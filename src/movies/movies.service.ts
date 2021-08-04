import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Movie,
} from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // ▼ database
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    // db의 movie.id === (int)param.id
    const movie = this.movies.find(movie => movie.id === parseInt(id));
    if(!movie) {
      throw new NotFoundException(`Movie with ID : ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== parseInt(id));
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData
    })
  }

  update(id:string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    // movies.id 자리에 updateData를 더한다
    this.movies.push({ ...movie, ...updateData });
  }
}
