import { Injectable } from '@nestjs/common';
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
    return this.movies.find(movie => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies.filter(movie => movie.id !== parseInt(id));
    return true;
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData
    })
  }
}
