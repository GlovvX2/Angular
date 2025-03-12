import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies:Movie[] = [
    { id: 1, title: "The Pursuit of Happiness", genre: "Drama", duration: 138, director: "Gabriele Muccino", cover: "z1.jpg" },
    { id: 2, title: "Inception", genre: "Sci-Fi", duration: 148, director: "Christopher Nolan", cover: "z2.jpg" },
    { id: 3, title: "The Godfather", genre: "Crime", duration: 175, director: "Francis Ford Coppola", cover: "z3.jpg" },
    { id: 4, title: "The Dark Knight", genre: "Action", duration: 152, director: "Christopher Nolan", cover: "z4.jpg" },
    { id: 5, title: "Schindler's List", genre: "Biography", duration: 195, director: "Steven Spielberg", cover: "z5.jpg" },
    { id: 6, title: "The Matrix", genre: "Action", duration: 136, director: "Lana Wachowski, Lilly Wachowski", cover: "z6.jpg" },
    { id: 7, title: "Forrest Gump", genre: "Drama", duration: 142, director: "Robert Zemeckis", cover: "z7.jpg" },
    { id: 8, title: "The Shawshank Redemption", genre: "Drama", duration: 142, director: "Frank Darabont", cover: "z8.jpg" },
    { id: 9, title: "Pulp Fiction", genre: "Crime", duration: 154, director: "Quentin Tarantino", cover: "z9.jpg" },
    { id: 10, title: "Fight Club", genre: "Drama", duration: 139, director: "David Fincher", cover: "z10.jpg" },
  ]
  constructor() { }
  public getAllMovies(): Movie[]
  {
    return this.movies;
  }
  public getMovieById(id:number):Movie | null
  {
      let movie = this.movies.find(movie => movie.id === id);
      return movie || null;
  }

}
