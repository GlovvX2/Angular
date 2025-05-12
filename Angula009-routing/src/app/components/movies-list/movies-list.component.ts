import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  imports: [RouterModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  movies:Movie[] = [];

  constructor(private service: MoviesService){
    this.movies = service.getAllMovies();
  }
}
