import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  imports: [RouterModule],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css'
})
export class MoviesDetailsComponent {
  movie:  Movie | null = null;
  constructor(private service:MoviesService,private route:ActivatedRoute ){
    route.params.subscribe(params=>
    {
      let id = Number(params['id']);
      this.movie = service.getMovieById(id);
    });
  }
}
